let firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyDo9uwjJdO8lBIzOr6nsP9Gc4rhpDYt-C0",
    authDomain: "blog-c9ffb.firebaseapp.com",
    projectId: "blog-c9ffb",
    storageBucket: "blog-c9ffb.appspot.com",
    messagingSenderId: "230179229952",
    appId: "1:230179229952:web:1e301c7e2c09367642e3e5",
    
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const LogoutUser = () => { auth.signout(0); location.reload();

}