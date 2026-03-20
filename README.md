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

Access the portal at: `http://127.0.0.1:5500/public/login.html`.

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






