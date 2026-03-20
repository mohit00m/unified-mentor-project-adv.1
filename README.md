<<<<<<< HEAD
**Rajput Foods | Digital Catering Ecosystem**
This project is a custom-built web application designed to bridge the gap between Rajput Foods (Caterers) and their clientele. It streamlines the entire process from menu discovery to order fulfillment through a dual-interface system.

**Core Functionality**
For the Rajput Foods Team (Admin)
Onboarding: Secure registration for business account management.

Command Center: A dedicated dashboard to monitor business operations.

Menu Curator: Full control over the digital catalog—easily add or update dishes with pricing, categories, and visuals.

Order Tracker: Real-time monitoring of incoming customer requests to ensure timely preparation.

For Our Diners (Customers)
User Accounts: Simple signup process that saves delivery preferences.

Digital Menu: An interactive storefront to explore all available catering options.

Smart Basket: A persistent cart system to gather items and calculate totals before purchase.

Secure Checkout: A simplified flow to finalize and place orders.

Order Journal: Access to a complete history of previous meals and orders.

Personal Settings: Easy tools to keep delivery addresses and contact info up to date.

**Tech Stack**
Interface: Crafted with HTML5, CSS3, and modern JavaScript (ES6+).

Engine: Powered by Firebase (Utilizing Authentication for security and Firestore for real-time data).

Logic: Built on a modular, client-side Single Page Application (SPA) architecture.

Getting Started
Environment: Requires a modern browser and an active internet connection to sync with the database.

**Database Link:**

Navigate to js/firebase-config.js.

Input your specific Firebase credentials.

Note: Ensure the 'Email/Password' Auth and 'Firestore' database are toggled 'On' in your Firebase console.

**Launching the Site:**

Due to browser security (CORS), run the project through a local server (like Live Server in VS Code).

Access the portal at: `https://catering-reservation-sys-c9046.web.app`.

**Deployment Workflow**

Phase 1: Set up an Admin account via the Login Portal.

Phase 2: Use the Admin dashboard to populate the menu with food items.

Phase 3: Create a User account to simulate the customer experience.

Phase 4: Add items to the basket and complete a test checkout.

Phase 5: Return to the Admin view to verify and process the new order.

**File Organization**

login.html: The primary gateway for all users.

index.html: The interactive menu for customers.

dashboard.html: The backend management screen for the admin.

js/: The "brain" of the app containing auth.js (security), db.js (data handling), and utils.js (helpers).

css/: The visual identity of Rajput Foods.

**Development Standards**

Clean Architecture: Logic is strictly separated into modules (Auth, Database, and UI) for easier maintenance.

Smart Logging: Includes a custom tracking utility for debugging and performance monitoring.

Permission Guards: Sophisticated role-based routing to ensure users only see what they are authorized to see






=======
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


<img width="1028" height="627" alt="a" src="https://github.com/user-attachments/assets/89f5ae56-6f67-400a-aa12-05ebf3b7dea1" />
<img width="1347" height="624" alt="b" src="https://github.com/user-attachments/assets/08f768c6-de7e-4b17-a8cb-8095be2d27ea" />
<img width="1046" height="514" alt="c" src="https://github.com/user-attachments/assets/4a8c1cbd-246d-454d-b5a7-e4d94339d852" />

<img width="1179" height="614" alt="d" src="https://github.com/user-attachments/assets/27b57e12-8a9c-42bb-8b76-80e557dba6e9" />

<img width="529" height="552" alt="e" src="https://github.com/user-attachments/assets/6be27174-7aa3-444b-84b3-1dfedfcf26bf" />
<img width="609" height="614" alt="f" src="https://github.com/user-attachments/assets/ee6579cd-aac6-4921-b8f3-3196901fa27d" />
<img width="1181" height="558" alt="g" src="https://github.com/user-attachments/assets/25690782-f06e-456c-8ebc-4ea457828ca3" />
<img width="918" height="612" alt="h" src="https://github.com/user-attachments/assets/3ae140af-f706-4df1-ac8d-1c2d79f8d8f6" />
<img width="584" height="567" alt="i" src="https://github.com/user-attachments/assets/dd153e98-5e24-467b-9940-7fb8074906e2" />







End of Report
