function goToStart() {
    if(document.getElementById('video1').currentTime <=6) {
      document.getElementById('video1').currentTime = 0;
    }
   }
function myFunction() {
    var response= document.getElementById("answer");
    var answerEntered= response.value;
        console.log("User Entered answer: ", answerEntered);
            var midName= "Stormborn";
                if(answerEntered == midName){
                console.log("correct!");
            var paraElem =
                document.getElementById("correctAnswer");
                paraElem.innerHTML="That's correct. Daenerys' middle name is Stormborn. Now click next page (below)."
            }
            else{
                console.log("incorrect!");
                var paraElem =
                document.getElementById("IncorrectAnswer");
                paraElem.innerHTML="That's not correct. Daenerys' middle name is Stormborn. Now click next page (below)." 
            }
        }
function checkPassword() {
  const password = document.getElementById("password").value;
  const correctPassword = "letmein";

  if (password === correctPassword) {
    window.location.href = "HomePage.html";
  } else {
    document.getElementById("error-message").textContent = "Incorrect password!";
  }
}
  