const firebaseConfig = {
    apiKey: "AIzaSyBYHfeYu_nB8tJLZKkjtC017kepwtnnkSg",
    authDomain: "loan-5d609.firebaseapp.com",
    databaseURL: "https://loan-5d609-default-rtdb.firebaseio.com",
    projectId: "loan-5d609",
    storageBucket: "loan-5d609.firebasestorage.app",
    messagingSenderId: "710671627106",
    appId: "1:710671627106:web:fec517824971c9a708723b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




const auth = firebase.auth();


var userid = "a";
var username = '';

const imgpr = document.getElementById('idfront');
const imgpr2 = document.getElementById('idback');

var status = "";


var firstname= '';
var lastname= '';
var address= '';

var emai= '';


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        //  window.alert("hi"+" "+user.uid);
        userid = user.uid;

        var pendingloan = firebase.database().ref().child("loan").orderByChild('uid').equalTo(userid);;

    


        var ref6 = firebase.database().ref('user-profile').child(userid);
        ref6.on("value", function (snapshot4) {
            if (snapshot4.exists()) {
      
      
      
                firstname = snapshot4.val().firstname;
                lastname = snapshot4.val().lastname;
                emai = snapshot4.val().email;
                balance = snapshot4.val().balance;
               
      
            }
      
            const formattedNumber = parseInt(balance).toLocaleString();
      
            $('#uname').html(firstname+" " +lastname);
            $('#em').html(emai);
            $('#abalance').html("৳"+formattedNumber+".00");
      
          $('#flname').html(firstname.charAt(0).toUpperCase()+lastname.charAt(0).toUpperCase());
      
        });

    }
});










  const signUp5 = document.getElementById('log');

signUp5.addEventListener('click', (event) => {
    // event.preventDefault();



    firebase.auth().signOut()
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Error Signing out:', error);
        })






});



const signUp2 = document.getElementById('log2');

signUp2.addEventListener('click', (event) => {
    // event.preventDefault();



    firebase.auth().signOut()
        .then(() => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error('Error Signing out:', error);
        })






});