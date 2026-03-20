const Auth = {
    // 1. Registration
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

    // 2. Role-Aware Login (The Fix)
    login: async (email, password, requiredRole) => {
        try {
            const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
            const user = userCredential.user;

            const userDoc = await firebase.firestore().collection('users').doc(user.uid).get();
            
            if (!userDoc.exists) {
                await firebase.auth().signOut();
                throw new Error("User profile not found in database.");
            }

            const userData = userDoc.data();

            // Check if user is using the wrong portal (e.g. user trying to log in as admin)
            if (requiredRole && userData.role !== requiredRole) {
                await firebase.auth().signOut();
                throw new Error(`This account is a ${userData.role} account. Please use the correct login box.`);
            }

            // Final Redirect logic based on database role
            if (userData.role === 'admin') {
                window.location.href = 'dashboard.html';
            } else {
                window.location.href = 'index.html';
            }

            return userData;
        } catch (error) {
            console.error("Login Error:", error);
            throw error;
        }
    },

    // 3. Page Protection
    checkAuth: (requiredRole) => {
        return new Promise((resolve) => {
            firebase.auth().onAuthStateChanged(async (user) => {
                if (!user) {
                    window.location.href = 'login.html';
                    return;
                }
                
                const doc = await firebase.firestore().collection('users').doc(user.uid).get();
                const userData = doc.data();

                if (!userData || (requiredRole === 'admin' && userData.role !== 'admin')) {
                    alert("Access Denied.");
                    window.location.href = 'login.html';
                    return;
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