
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  //  Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCPfoYXvvlwymZmXg0iq3ZIXH4t0K7vISw",
    authDomain: "vashi-ec47f.firebaseapp.com",
    databaseURL: "https://vashi-ec47f-default-rtdb.firebaseio.com",
    projectId: "vashi-ec47f",
    storageBucket: "vashi-ec47f.appspot.com",
    messagingSenderId: "42080169228",
    appId: "1:42080169228:web:3fc80091988ac5a8c5ad29",
    measurementId: "G-BD210DRDVL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

import{getDatabase,get,ref,set, update, push} from
"https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
var db = getDatabase(app);
///////
var gender;
var first;
var name;
var nick;
var email ;
var next;
var previous ;
next = document.getElementById('next');
previous = document.getElementById('previous');



function myFun(){
gender=document.querySelector('.gen')   ;
first=document.querySelector('#first')   ;
email= document.getElementById('em');
var vashi = 'vashi/'+gender.value+'/'+first.value+'/';
//////     
get(ref(db,vashi)).then(snapshot=>{
    // console.log(snapshot.val()); 
name = document.getElementById('name');     
nick = document.getElementById('short');     
//console.log(snapshot.val())  
//console.log('vashi is',vashi) ///////

///////
//console.log('vashi is',vashi) 


//
if(snapshot.val()!==null){
var keys=Object.keys(snapshot.val())   ;  
var values=Object.values(snapshot.val())   ;
}else{
  alert('server problem');
 document.getElementById('submit').style.opacity='1';
 next.style.opacity='0';
}


//
if(gender.value!==""&&first.value!==""){
var i;
//
push(ref(db,'vashi/emails/'),{
email:em.value     
     })
//
document.getElementById('submit').style. opacity='.2' ;
//
name.value=keys[0] 
nick.value=values[0]


//

// console.log(keys)
 //console.log(values)
 i=1 
 // 
next.addEventListener('click',ev=>{
///  


if(keys[i]!==undefined){
name.value=keys[i]
nick.value=values[i]
i++;
console.log(i)
}else{
 // alert('undefined') ;
 i=0;
 name.value=keys[i]
nick.value=values[i] 
i++;
}
////
}) 
previous.addEventListener('click',ev=>{
   // i=1;  
//   name.value=keys[i] 
// nick.value=values[i] 
// i++;  
}) 
 
 
 
}else{
alert('please fill flowing data')  ;   
document.getElementById('next').style.opacity='0';

}
     
     
//////     
})

////////
};
document.getElementById('submit').addEventListener('click',ev=>{
 if(em.value!=="")  {  
 console.log(em.value) ;    
     myFun()
    next.style.opacity='1' ;
    
///    
    
    
    
    
//    
    
    
 }else{
  alert('please fill email')    
 }
})