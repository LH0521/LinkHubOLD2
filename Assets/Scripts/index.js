const firebaseConfig = {
    apiKey: "AIzaSyBt5PXGon8p4ZDAKAzSj4QTTkDYC89FMfw",
    authDomain: "linkhub-4e5d3.firebaseapp.com",
    projectId: "linkhub-4e5d3",
    storageBucket: "linkhub-4e5d3.appspot.com",
    messagingSenderId: "517929929211",
    appId: "1:517929929211:web:98e912f9fbd988c0a5a35e"
};

firebase.initializeApp(firebaseConfig);

const profilePicture = document.getElementById('profile-picture');
const profileName = document.getElementById('profile-name');
const loginButton = document.getElementById('login-button');
const savesButton = document.getElementById('saves-button');

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

loginButton.addEventListener('click', () => {
    auth.signInWithPopup(provider).then((result) => {
        const user = result.user;
        profilePicture.src = user.photoURL;
        profileName.textContent = user.displayName;
        savesButton.style.display = 'block';
    }).catch((error) => {
        console.error('Error during login:', error);
    });
});