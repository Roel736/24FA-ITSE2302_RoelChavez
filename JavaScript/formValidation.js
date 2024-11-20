

   
  //  its for the submit !
   document.getElementById("form").addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
  event.preventDefault();

 //displays the values for the first second and third function!
if (validate()){

  const totalamount = total();

//displays on ur screen
console.log("First Name:" + document.getElementById("fname").value);
console.log("Last Name:" + document.getElementById("lname").value);
 
if (document.getElementById("gender1").checked){
  //displays on ur screen
  console.log("Gender:" + document.getElementById("gender1").value);

}

if (document.getElementById("gender2").checked){
  //displays on ur screen
  console.log("Gender:" + document.getElementById("gender2").value);
}

if (document.getElementById("gender3").checked){
  //displays on ur screen
  console.log("Gender:" + document.getElementById("gender3").value);
}

//puts this on ur screen
 console.log("Total: $" + totalamount)
 console.log("Message:" + document.getElementById("review").value);
}
}

function validate(){
  let fname = document.getElementById("fname");
  let lname = document.getElementById("lname");

 if (fname.value.trim() == "") { 
  //returns it if its false or if u did it wrong!
   alert("You didn't put a first name!");
   fname.focus(); 
   return false;
 }
 
 if (lname.value.trim() =="") { //returns it if u did it wrong!
   alert("You didn't put a last name!");
   lname.focus(); 
   return false;
} 
 return true; 
} 
 
//calculates the total
function total() { 
 var total=0


if (document.getElementById("pcat").checked){
  total +=parseFloat(document.getElementById("pcat").value);
}

if (document.getElementById("pdog").checked){
  total +=parseFloat(document.getElementById("pdog").value);
}

if (document.getElementById("pvideos").checked){
  total +=parseFloat(document.getElementById("pvideos").value);
}
return total;
}