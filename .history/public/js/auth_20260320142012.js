const Auth = {
    // 1. Unified Registration (Keep as is, but added fallback)
    register: async (email, password, role, extraData = {}) => {
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;

            const profileData = {
                uid: user.uid,
                email: email,
                role: role, // 'user' or 'admin'
                isAdmin: role === 'admin',
                name: extraData.name || "User",
                address: extraData.address || "",
                phone: extraData.phone || "",
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            if (role === 'admin') {
                profileData.businessName = extraData.businessName || "New Business";
                profileData.description = extraData.description || "";
            }

            await firebase.firestore().collection('users').doc(user.uid).set(profileData);
            return user;
        } catch (error) {
            console.error("Auth Register Error:", error);
            throw error;
        }
    },

    // 2. UPDATED: Role-Aware Login
    // Added 'requiredRole' to prevent an Admin from logging into the User portal and vice versa
    login: async (email, password, requiredRole) => {
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;

            const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
            
            if (!userDoc.exists) {
                await firebase.auth().signOut();
                throw new Error("User profile not found.");
            }

            const userData = userDoc.data();

            // Check if the user trying to log in actually has the right role for that form
            if (requiredRole && userData.role !== requiredRole) {
                await firebase.auth().signOut();
                throw new Error(`This account is registered as a ${userData.role}. Please use the correct login portal.`);
            }

            // Strict Redirects
            if (userData.role === 'admin') {
                window.location.href = 'dashboard.html'; // Admin Dashboard
            } else {
                window.location.href = 'index.html'; // Customer Home
            }

            return userData;
        } catch (error) {
            console.error("Login Error:", error);
            throw error;
        }
    },

    // 3. UPDATED: Page Protection Guard
    checkAuth: (requiredRole) => {
        return new Promise((resolve) => {
            firebase.auth().onAuthStateChanged(async (user) => {
                if (!user) {
                    window.location.href = 'login.html';
                    return;
                }
                
                const doc = await firebase.firestore().collection('users').doc(user.uid).get();
                const userData = doc.data();

                if (!userData) {
                    window.location.href = 'login.html';
                    return;
                }

                // If on an Admin page but user is just a 'user'
                if (requiredRole === 'admin' && userData.role !== 'admin') {
                    alert("Access Denied: Admin privileges required.");
                    window.location.href = 'index.html';
                } 
                // If on a User page but no role is found
                else if (requiredRole === 'user' && !userData.role) {
                    window.location.href = 'login.html';
                }
                
                resolve(userData);
            });
        });
    },

    logout: () => {
        return firebase.auth().signOut().then(() => {
            window.location.href = 'login.html';
        });
    }
};