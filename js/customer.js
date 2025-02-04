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




var service_name = '';
var url = '';
var url2 = '';
var ref5 = firebase.database().ref().child("customer_care").child('whatsapp');
var ref6 = firebase.database().ref().child("customer_care").child('telegram');
  



ref5.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



      service_name = snapshot4.val().service_name;
      url = snapshot4.val().url;

 






    }


console.log(url)



  })



  ref6.on("value", function (snapshot4) {
    if (snapshot4.exists()) {



 
      url2 = snapshot4.val().url;

 






    }


console.log(url2)



  })



const sub = document.getElementById('whats');


sub.addEventListener('click', (event) => {

  
    window.open(url, '_blank');

});



const sub2 = document.getElementById('tele');


sub2.addEventListener('click', (event) => {

  
    window.open(url2, '_blank');

});