const cupCakesObj=[
    {
      "name": "Chocolate",
      "calories": "high",
      "weight": "200gm"
    },
    {
      "name": "Carrot",
      "calories": "medium",
      "weight": "150gm"
    },
    {
      "name": "Banana",
      "calories": "high",
      "weight": "200gm"
    },
    {
      "name": "Strawberry",
      "calories": "low",
      "weight": "160gm"
    },
    {
      "name": "Peanut",
      "calories": "medium",
      "weight": "200gm"
    }
  ]
 
  function show_cupcakes(data){
    
    const table = document.querySelector("#cupcake-table");
   
    data.forEach(el=>{
     var row = ` <tr>
     <td> ${el.name}</td>
     <td class =${color(el.calories)} > ${el.calories}</td>
     <td> ${el.weight}</td>
     </tr>`;
     
    table.innerHTML += row;
    })

}
function color (bcolor){
    if(bcolor == "high")
    return "high" ;
    else if (bcolor == "medium")
    return "medium";
    else
    return "low";

}
show_cupcakes(cupCakesObj);
function validate(){
   //  user name
    const userInput = document.querySelector(".userName");
    const namePattern=/[a-zA-Z0-9]{5,16}$/;
    const errUserP =document.querySelector(".nameP");
   // user count of categury 
    const userCount = document.querySelector(".inputCount");
    const countPattern=/^(1[0-5]|[1-9])$/;
    const errCountP=document.querySelector(".countP")
   // user type of categury 
    const inputType = document.querySelector(".typeSelect");
    const inputtime = document.querySelector(".timeSelect");
    const inputAller = document.querySelector(".AllerSelect");
   //submit Button
    const submitButton =document.querySelector(".submitBtn")
   //selectors
   const cupType = document.querySelector(".typeSelect");
   const cupTypeP = document.querySelector(".typep")
   const cupTime = document.querySelector(".timeSelect");
   const cupTimeP = document.querySelector(".timep")
   const allerCup = document.querySelector(".AllerSelect"); 
   const allerP = document.querySelector(".Allerp")  
   //user name validation 
    if(!userInput.value.match(namePattern)){
        errUserP.innerHTML="The Name Must Be From 5-16 Character";
        errUserP.style.color="red";
    }
    else {
    errUserP.innerHTML="Okay";
    errUserP.style.color="green";
    }
    // -------------------------------------------

    //count validation 
    if(!userCount.value.match(countPattern)){
        errCountP.innerHTML="The count Must Be From 1-16 ";
        errCountP.style.color="red";
    }
    else {
    errCountP.innerHTML="Okay";
    errCountP.style.color="green"
    }
    // -------------------------------------
    // on change type function 
    for(var x = 0 ; x<=3;x++){
      if(cupType.value=="0" ){
      cupTypeP.innerHTML="cant be none";
      cupTypeP.style.color="red";
        }
      else {
      cupTypeP.innerHTML="Okay";
      cupTypeP.style.color="green";}

    }
    // delevary time
    for(var x = 0 ; x<=9;x++){
        if(cupTime.value=="0"){
         cupTimeP.innerHTML="cant be none";
         cupTimeP.style.color="red";
          }
        else if(cupType.value=="1" && cupTime.value=="9") {
        cupTimeP.innerHTML="this type of cake cannot be delivered at 4 PM.";
        cupTimeP.style.color="red";
        }
        else {
        cupTimeP.innerHTML="Okay";
        cupTimeP.style.color="green";
        }
  
    }
    // AllerSelect 
    for( var x = 0 ; x<=2 ; x++){
        if(cupType.value=="1" && allerCup.value=="1"){
            allerP.innerHTML="this type of cake is not dairy free";
            allerP.style.color="red";
        }
        else if(cupType.value="3" && allerCup.value=="2"){
            allerP.innerHTML="this type of cake is not dairy free";
            allerP.style.color="red"; 
        }
        else{
            allerP.innerHTML="Okay";
            allerP.style.color="green";
        }
      
       

    }
  
   
    
}

function show_storage(){
const showName = document.querySelector(".showbtn");
const userWelcome = document.querySelector(".showName");
}