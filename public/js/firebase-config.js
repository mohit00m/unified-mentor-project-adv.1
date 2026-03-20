const firebaseConfig = {
    apiKey: "AIzaSyCBjDYAExU4KXUbx71psKQhvVI8fmAkBs8",
    authDomain: "catering-reservation-sys-c9046.firebaseapp.com",
    projectId: "catering-reservation-sys-c9046",
    storageBucket: "catering-reservation-sys-c9046.firebasestorage.app",
    messagingSenderId: "980657513260",
    appId: "1:980657513260:web:52de9b7bd9f68409f2c289"
};

function initFirebase() {
    if (typeof firebase === 'undefined') {
        console.error("Firebase SDK not loaded!");
        return;
    }
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
        console.log("Firebase initialized successfully.");
    }
}