document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
});

var firebaseConfig = {
    apiKey: "AIzaSyArwtfO26zxE6Tz74r4sJizd5CYSrjWOXY",
    authDomain: "f-05-ecc5b.firebaseapp.com",
    projectId: "f-05-ecc5b",
    storageBucket: "f-05-ecc5b.appspot.com",
    messagingSenderId: "35743123047",
    appId: "1:35743123047:web:2f046a1e6ebb3a586576c2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const signUpForm = document.querySelector('#signUpForm');
const signInForm = document.querySelector('#signInForm');

signUpForm.addEventListener('submit', formSubmitHandler);
signInForm.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event){
    event.preventDefault()
}


//регистрация
function signUp() {
    const email = document.querySelector('#emailSignUp');
    const password = document.querySelector('#passwordSignUp');
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(error => M.toast({html: error}))
    M.toast({html: 'Registration successful!'})
}

//вход
function signIn() {
    const email = document.querySelector('#emailSignIn');
    const password = document.querySelector('#passwordSignIn');
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(error => M.toast({html: error}))
    M.toast({html: 'Successful!'})
}

function signOut() {
    auth.signOut()
    M.toast({html: 'Log out successful!'})
}

auth.onAuthStateChanged((user)=> {
    if(user) {
        const email = user.email
        M.toast({html: 'Active User: ' + email})
    }else {
        M.toast({html: 'No Active User!'})
    }
})








