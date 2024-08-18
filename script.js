// function myName(){
//     alert('sadia');
//     return "sadia";
// }
// let funTime = myName();
// console.log(funTime);


function myMan(a, b){
   console.log('hello1');
   console.log('hello2');
   console.log('hello3');
   console.log('hello4');

   if(a == 'test'){
    return 'firstname test';
   }
   console.log('hello5');
   console.log('hello6');

   if(b == "jaan"){
    return;
   }

   console.log('hello7');
   console.log('hello8');
   

   let myScore = 0;
   if(a == 'raj' && b =='sadia'){
    myScore = 100;
   }
   return myScore;
}


let hi = myMan('raj', 'sadia');
console.log(hi);


function memberRegistration (memberId, memeberAge){
   return checkMember(memberId, memeberAge);
}

function checkMember(memberId, memeberAge){
    if(memberId == '123' && memeberAge >=18){
        return true;
    }
    return false;
}

if (memberRegistration('123', 18)){
    alert('registration successful');
}
else{
    alert('registration failed');

}
