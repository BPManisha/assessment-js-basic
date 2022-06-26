// this is password validationassuming that the password will be entered by user and will be captured by password.js file..
//lets do it in 3 steps(conditions)...
//1//first check whether entered password is 8 characters long
//2//second check for atleast 1 capital letter
//3//third check for atleast 1 number
// if the entered password meets all 3 checks(conditions) , this is a strong password.
// if the entered password does notmeet any of the 3 checks(conditions) , this is a not a strong password.

//writing a function verifyPassword

function verifyPassword(input){
    var accepted =  /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,15}$/;

    // if(input.value.match(accepted)){
    //     consol.log('Strong Password')
    // }

   if (input.value.length < 8){
        consol.log(" Password is too short")
    }
    else if (input.value.search(/[A-Z]/) < 0 ){
        console.log(" Password must contain at least one capital letter")
    }
   else if (input.value.search(/[0-9]/) < 0 ){
       console.log(" Password must contain at least one number")
   }
    else {
        console.log(" Strong Password ")
    }
}