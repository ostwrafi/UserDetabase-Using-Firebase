
# 📦 UserDatabase-Using-Firebase

![Admin Dashboard Preview](Detabase.PNG)

> A powerful web-based **Admin Dashboard** built with Firebase Realtime Database. Designed to manage users, HWIDs, bans, and application controls (like version, status, and download link) — similar to KeyAuth but completely custom and flexible.

## 🚀 Features

- 🔐 Admin Login (secured by Firebase Auth)
- 👥 Create & manage users (username, password, HWID)
- 🚫 Ban/Unban users
- 📄 View user IPs, creation date, last login
- 🧠 HWID Lock & Reset
- 📦 Application Info Display:
  - Version
  - Status (On/Off)
  - Download Link
- ⚙️ App Control Panel: Easily update version, status, and download URL
- 🎨 Styled with CSS + Particles.js background

## 📁 Project Structure

```
UserDatabase-Using-Firebase/
├── index.html          # Admin Dashboard
├── login.html          # Admin Login Page
├── css/
│   └── styles.css      # Dark theme + animated styling
├── js/
│   └── script.js       # Firebase logic
├── img/
│   └── logo.png        # Optional custom logo or background
└── README.md           # You're here!
```

## 🛠️ Setup Instructions

1. **Clone the Repo**

```bash
git clone https://github.com/ostwrafi/UserDetabase-Using-Firebase.git
cd UserDetabase-Using-Firebase
```

2. **Firebase Setup**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable **Authentication** (Email/Password)
   - Enable **Realtime Database** and set rules:
     ```json
     {
       "rules": {
         ".read": "auth != null",
         ".write": "auth != null"
       }
     }
     ```
   - Go to **Project Settings > Web** and copy your Firebase config

3. **Insert Firebase Config**
   - Open `js/script.js`
   - Replace the `const firebaseConfig = { ... }` with your config

4. **Start Using**
   - Open `login.html` in a browser
   - Log in using a Firebase Admin account (create one manually via Firebase Auth)

## 🧠 How It Works

- **Admin Login**: Uses Firebase Auth to protect access.
- **User Creation**: Admin can add username/password/HWID; stored under `/users/username/` in Realtime DB.
- **HWID Lock**: Clients compare saved HWID with local device before allowing app use.
- **App Control**: Admin updates version, status (on/off), and download URL under `/appControl/`.
- **Live Dashboard**: Automatically pulls app info and user stats using Firebase listeners.

## 🔒 Security Tips

- Never expose this dashboard publicly without auth.
- Use HTTPS for production.
- Regularly rotate admin credentials.



## 📜 License

This project is licensed for **educational use only**. Do not use for malicious purposes.
