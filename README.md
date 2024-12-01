<img width="48" height="48" src="https://img.icons8.com/color/48/firebase.png" alt="firebase"/> 
<h1>Firebase Authentication & User Profile App</h1>

This is a simple web application built using **React**, **Material-UI**, and **Firebase** to handle user authentication (sign-up, login) and display a user profile page upon successful authentication. The project demonstrates how to use **Firebase Authentication** and **Firestore** to manage user data.

---

## 🔧 **Technologies Used**

<div style="display: flex; flex-wrap: wrap;">
  <div style="margin-right: 20px; margin-bottom: 10px;">
    <strong>React</strong> - Front-end JavaScript library for building user interfaces.
  </div>
  <div style="margin-right: 20px; margin-bottom: 10px;">
    <strong>Redux</strong> - For state management (especially for user authentication state).
  </div>
  <div style="margin-right: 20px; margin-bottom: 10px;">
    <strong>Material-UI</strong> - Component library for modern, responsive design.
  </div>
  <div style="margin-right: 20px; margin-bottom: 10px;">
    <strong>Firebase</strong> - For Authentication and Firestore database.
  </div>
  <div style="margin-right: 20px; margin-bottom: 10px;">
    <strong>React Router</strong> - For managing routing between pages.
  </div>
  <div style="margin-right: 20px; margin-bottom: 10px;">
    <strong>Redux Toolkit</strong> - For simplifying Redux store configuration.
  </div>
</div>

---

## 📝 **Features**

<ul style="list-style-type: square; margin-left: 20px;">
  <li><strong>User Authentication</strong>: Sign-up and login functionality using Firebase Authentication.</li>
  <li><strong>User Profile</strong>: After successful login, users are redirected to a profile page.</li>
  <li><strong>Responsive Design</strong>: The app works across different screen sizes.</li>
  <li><strong>Loading State</strong>: Custom loader and user feedback for login errors like "User does not exist" and "Incorrect password."</li>
</ul>

---

## 🔧 **How to Build the Project From Scratch**

### 1. Clone the Repository
To set up the project locally, follow these steps:

```bash
git clone https://github.com/your-username/firebase-auth-project.git
cd firebase-auth-project
```

### 2. 🔧 Install Dependencies
Once inside the project directory, install all necessary dependencies by running:
```bash
npm install
```
This will install all the required packages listed in the package.json file, such as React, Redux, Firebase, and others.

### 3. Firebase Configuration

Before you start, you need to set up Firebase for the project.

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project if you don't have one.
3. Once the project is created, go to the **Authentication** section and enable **Email/Password** sign-in method.
4. In the **Firestore Database** section, enable Firestore and set up a database.
5. Copy the Firebase configuration from the Firebase Console, which will look something like this:

```html
<div style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; margin: 10px 0; font-family: 'Courier New', Courier, monospace;">
  <code style="font-size: 14px; color: #333;">
    const firebaseConfig = {<br/>
    apiKey: "your-api-key",<br/>
    authDomain: "your-auth-domain",<br/>
    projectId: "your-project-id",<br/>
    storageBucket: "your-storage-bucket",<br/>
    messagingSenderId: "your-messaging-sender-id",<br/>
    appId: "your-app-id",<br/>
  };
  </code>
</div>
```
Replace the default Firebase config in your src/firebase.js or equivalent file with your project’s Firebase config.
```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```
<div style="background-color: #f9f9f9; border-left: 5px solid #ffcc00; padding: 10px; margin: 20px 0; font-family: 'Arial', sans-serif; font-size: 16px;">
  <strong>Tip:</strong> <span style="font-weight: bold; color: #e74c3c;">Always keep your Firebase API keys secure and never expose them in public repositories.</span>
</div>

###  4. Run the Application
After setting up the Firebase configuration, run the application with the following command:
```bash
npm start
```
This will start the development server, and you can view your app by navigating to [http://localhost:3000](http://localhost:3000).
---
<div style="background-color: #f4f4f9; border-left: 5px solid #3498db; padding: 15px; margin: 20px 0; font-family: 'Arial', sans-serif; font-size: 18px;">
  <h2 style="font-size: 20px; color: #2c3e50;">💡 Next Steps</h2>
  <ul style="list-style-type: none; padding-left: 20px; margin-top: 10px;">
    <li style="margin-bottom: 8px;">1️⃣ Customize the UI and add additional features like password reset.</li>
    <li style="margin-bottom: 8px;">2️⃣ Implement user roles and permissions (e.g., admin, user).</li>
    <li style="margin-bottom: 8px;">3️⃣ Integrate additional Firebase services like Firestore for storing user data.</li>
    <li style="margin-bottom: 8px;">4️⃣ Set up deployment (e.g., using Vercel or Netlify) to make your app live.</li>
  </ul>
</div>
---
<div style="background-color: #fff3e0; border-left: 5px solid #ff8c00; padding: 15px; margin: 20px 0; font-family: 'Arial', sans-serif; font-size: 18px;">
  <h2 style="font-size: 20px; color: #d35400;">👨‍💻 Contributing</h2>
  <p style="color: #2c3e50; font-size: 16px; margin-top: 10px;">We love contributions! If you'd like to improve this project, feel free to fork it and submit a pull request. Here are some ways you can contribute:</p>
  <ul style="list-style-type: square; padding-left: 20px; margin-top: 10px;">
    <li style="margin-bottom: 8px;">🛠️ Fix bugs or issues in the current code.</li>
    <li style="margin-bottom: 8px;">🎨 Enhance the UI with new features or design improvements.</li>
    <li style="margin-bottom: 8px;">📚 Improve documentation and add comments to make the code easier to understand.</li>
    <li style="margin-bottom: 8px;">💡 Suggest new features or functionalities to add to the project.</li>
  </ul>
  <p style="color: #2c3e50; font-size: 16px; margin-top: 10px;">To get started, simply fork the repository and follow the steps in the <strong style="color: #2980b9;">How to Build</strong> section of the README.</p>
</div>
