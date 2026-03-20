Project Report: Rajput Foods | Digital Catering Ecosystem

---

1. Introduction

The Rajput Foods Digital Catering Ecosystem is a modern web-based application designed to digitize and streamline catering services. The platform connects the catering service provider (Rajput Foods) with customers through an efficient, user-friendly interface.

The system simplifies the complete workflow—from browsing menus to placing orders and managing them in real-time—using a dual-interface architecture for both administrators and customers.

---

2. Objectives

- To digitize the catering ordering process
- To provide real-time order tracking and management
- To enhance customer experience through a seamless UI
- To reduce manual errors in order handling
- To enable efficient menu and order management for admins

---

3. System Overview

3.1 Admin Panel Features

- Secure Authentication: Admin login/registration system
- Dashboard (Command Center): Overview of orders and operations
- Menu Management: Add, update, or delete food items
- Order Management: Track and process incoming orders in real-time

3.2 Customer Panel Features

- User Registration/Login
- Digital Menu Browsing
- Cart System (Smart Basket)
- Checkout System
- Order History (Order Journal)
- Profile Management (Personal Settings)

---

4. Technology Stack

Component| Technology Used
Frontend| HTML5, CSS3, JavaScript (ES6+)
Backend| Firebase
Database| Firestore
Authentication| Firebase Authentication
Architecture| Single Page Application (SPA)

---

5. System Architecture

The application follows a modular SPA architecture, where:

- UI, Authentication, and Database logic are separated
- Firebase handles backend services (Auth + Database)
- Real-time updates are achieved using Firestore

---

6. File Structure

Project Folder/
│
├── login.html          → Entry point for users
├── index.html          → Customer menu interface
├── dashboard.html      → Admin dashboard
│
├── js/
│   ├── auth.js         → Authentication logic
│   ├── db.js           → Database operations
│   ├── utils.js        → Helper functions
│   └── firebase-config.js → Firebase credentials
│
├── css/
│   └── styles.css      → UI styling

---

7. Working Process

Admin Workflow

1. Register/Login as Admin
2. Add food items to menu
3. Monitor incoming orders
4. Process and manage orders

Customer Workflow

1. Register/Login
2. Browse menu
3. Add items to cart
4. Checkout and place order
5. View order history

---

8. Deployment Details

The project is hosted online and accessible at:

👉 https://catering-reservation-sys-c9046.web.app

---

9. Installation Guide (Run on Any PC)

Prerequisites

- A modern web browser (Chrome recommended)
- Internet connection
- Code editor (VS Code recommended)

---

Step-by-Step Setup

Step 1: Download Project

- Download ZIP or clone from GitHub
- Extract files into a folder

---

Step 2: Open in VS Code

- Open folder in Visual Studio Code

---

Step 3: Configure Firebase

- Go to:
  "js/firebase-config.js"

- Replace with your Firebase credentials:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

---

Step 4: Enable Firebase Services

In Firebase Console:

- Enable Authentication → Email/Password
- Enable Firestore Database

---

Step 5: Run Project (IMPORTANT)

Due to browser security (CORS), DO NOT open HTML directly.

👉 Use Live Server:

1. Install Live Server Extension in VS Code
2. Right-click "login.html"
3. Click "Open with Live Server"

---

Step 6: Access Application

- Login Page: "login.html"
- Admin Dashboard: "dashboard.html"
- Customer Menu: "index.html"

---

10. Testing Workflow

1. Create Admin Account
2. Add menu items
3. Create User Account
4. Place an order
5. Verify order in Admin Dashboard

---

11. Key Features & Highlights

- Real-time database updates
- Role-based authentication (Admin/User)
- Clean modular code structure
- Responsive UI design
- Easy deployment using Firebase Hosting

---

12. Limitations

- Requires internet connection
- Depends on Firebase services
- No payment gateway integration (can be added later)

---

13. Future Enhancements

- Online payment integration (Razorpay/Stripe)
- Push notifications
- AI-based food recommendations
- Mobile app version
- Admin analytics dashboard

---

14. Conclusion

The Rajput Foods Digital Catering Ecosystem successfully digitizes the catering business workflow. It improves efficiency, enhances customer experience, and provides a scalable solution for modern food service management.

---

15. Screenshots

(Admin & User interface visuals attached as provided)

---

End of Report
