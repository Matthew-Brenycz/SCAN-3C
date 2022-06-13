

const reScore = document.getElementById('re-score');
const leScore = document.getElementById('le-score');
const totalScore = document.getElementById('total-score');
reScore.value = 0;
leScore.value = 0;
totalScore.value = 0;

const questionInputs = document.getElementsByClassName('quiz-txt-input0');
const reQuestionInputs = document.getElementsByClassName('quiz-right');
const leQuestionInputs = document.getElementsByClassName('quiz-left');


for (i = 0; i < questionInputs.length; i++){
    questionInputs[i].addEventListener("change", alterScoreTotals);
}


function alterScoreTotals(){
    let reRunningTotal = 0;
    let leRunningTotal = 0;


    if (event.target.classList.contains('quiz-right')){
        for (i = 0; i < reQuestionInputs.length; i++){
            reRunningTotal += Number(reQuestionInputs[i].value);
            reScore.value = reRunningTotal;
        }
    }

    if (event.target.classList.contains('quiz-left')){
        for (i = 0; i < leQuestionInputs.length; i++){
            leRunningTotal += Number(leQuestionInputs[i].value);
            leScore.value = leRunningTotal;
        }
    }


    totalScore.value = Number(reScore.value) + Number(leScore.value);

}



// function validateForm(){
//     console.log("this function is called");
//     for (i = 0; i < numberInputs.length; i++){
//         if (!numberInputs[i].checkValidity()) {
//             alert("This number is outside the specified range.");
//             return false
//         }
//     }
// }
