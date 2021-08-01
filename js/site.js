/*Pseudo code

1.  Get string from user.
2.  Reverse the string
3.  Display the reversed string to the user*/

//Get string from user (Controller)
function getValue(){

    //sets alert section to invisible
    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("userString").value;

    let reversedString = reverseTheString(userString);

    displayString(reversedString);
}

//reverse the string (Logic)
function reverseTheString(userString){
    let revString = [];

    //reverse a string using a for loop
    for (let i = userString.length - 1; i >= 0; i--){
       revString += userString[i];
    }

    return revString;
}


//display string (View)
function displayString(reversedString){
   //write message to screen 
   document.getElementById("message").innerHTML = `Your string reverse is: ${reversedString}`;

   //turn on alert.
   document.getElementById("alert").classList.remove("invisible");
}