const Auth = {
    // 1. Unified Registration
    register: async (email, password, role, extraData = {}) => {
        try {
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;

            const profileData = {
                uid: user.uid,
                email: email,
                role: role, // 'user' or 'admin'
                isAdmin: role === 'admin', // Backward compatibility for security rules
                name: extraData.name || extraData.ownerName || "User",
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

    // 2. Unified Login
    login: async (email, password) => {
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;

            const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
            
            if (!userDoc.exists) {
                throw new Error("User profile not found in database.");
            }

            const userData = userDoc.data();

            // Smart Redirect
            if (userData.role === 'admin' || userData.isAdmin === true) {
                window.location.href = 'dashboard.html';
            } else {
                window.location.href = 'index.html';
            }

            return user;
        } catch (error) {
            console.error("Login Error:", error);
            throw error;
        }
    },

    // 3. Updated Page Protection Guard
    checkAuth: (requiredRole) => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                // If not logged in, always go to login.html (NOT index.html to avoid loops)
                window.location.href = 'login.html';
                return;
            }
            
            const doc = await firebase.firestore().collection('users').doc(user.uid).get();
            const userData = doc.data();

            if (!userData) {
                window.location.href = 'login.html';
                return;
            }

            // PERMISSION LOGIC:
            // 1. If page requires 'admin' and user is NOT admin -> Kick to index.html
            if (requiredRole === 'admin' && userData.role !== 'admin') {
                alert("Access Denied: Admin only.");
                window.location.href = 'index.html';
            } 
            // 2. If page requires 'user', both 'user' AND 'admin' roles are allowed
            else if (requiredRole === 'user' && (userData.role !== 'user' && userData.role !== 'admin')) {
                window.location.href = 'login.html';
            }
        });
    },

    // 4. Logout Redirects to Login
    logout: () => {
        return firebase.auth().signOut()
            .then(() => {
                console.log("Logged out successfully");
                window.location.href = 'login.html'; // Or your login page name
            })
            .catch((error) => {
                console.error("Logout Error:", error);
            });
    }
};