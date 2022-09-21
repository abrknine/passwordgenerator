

let password=" ";

let upc=document.querySelector("#as");
let lcc=document.querySelector("#as1");
let numbc=document.querySelector("#as2");
let specc=document.querySelector("#as3"); 
var a=document.querySelector("#leng");
// let p=a.value;


let m=document.querySelector("#l p");


document.querySelector(".btn").addEventListener("click",function() {
    for(let i=0; i<a.value; i++ ){
     if(upc.checked && password.length<=a.value){
      password += generatefromuc();
     }
     if(lcc.checked  && password.length<=a.value){
       password += generatefromlc();
     }
     if(numbc.checked && password.length<=a.value){
      password+= generatefromnumb();
     }
     if(specc.checked && password.length<=a.value)
     {
        password += generatefromspec();
     }
   }  
      console.log(password);
      
      m.textContent=password;
      //$('#l span').text(password);


       
        
     //console.log(password);

}); 
//console.log(password);
//   m.innerHTML(password);

function generatefromuc(){
   const uc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let thing=Math.floor(Math.random()*(uc.length));
    return uc[thing];
}
function generatefromlc(){
   const lc="abcdefghijklmnopqrstuvwxyz";
    let thing=Math.floor(Math.random()*(lc.length));
    return lc[thing];
}
function generatefromnumb(){
   const numb="0123456789";
    let thing=Math.floor(Math.random()*(numb.length));
    return numb[thing];
}
function generatefromspec(){
   const spec="!@#$%^&*()";
    let thing=Math.floor(Math.random()*(spec.length));
    return spec[thing];

}


// console.log(generatefromeveryset(uc));

// m.innerHTML(password); 
let k=document.querySelector(".material-symbols-outlined");

k.addEventListener("click",function(){
    m.textContent="Copied!";
   k.style.color="black";
   let g= password;
})