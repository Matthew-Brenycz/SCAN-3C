// Old javascript function for page redirect on submit

// formSubmitButton = document.getElementById('form_submit_button');

// formSubmitButton.onclick = function redirect(){
//     var url = "http://127.0.0.1:8000/testing/diagnostic-test-4/";
//     $(location).attr('href', url);
// }

const questionParagraphs = document.getElementsByClassName('question-par');
const questionButtons = document.getElementsByClassName('q-btn');
const plusButtons = document.getElementsByClassName('quiz-button1');

const reScore = document.getElementById('re-score');
const leScore = document.getElementById('le-score');
const totalScore = document.getElementById('total-score');

reScore.value = 0;
leScore.value = 0;
totalScore.value = 0;

const storedClickedButtons = [];

const buttonStyles = {
    backgroundColor: 'lightgreen',
    color: 'black',
}

for (i = 0; i < questionButtons.length; i++){
    questionButtons[i].addEventListener("click", buttonToggle);
}

function buttonToggle(){
    addToScore();
    activatePair();
}

function addToScore(){

    let reRunningTotal = Number(reScore.value);
    let leRunningTotal = Number(leScore.value);
    let leModifier = 0;
    let reModifier = 0;

    let questionParent = event.target.closest('.question-par');
    let children = questionParent.children;

    for (i = 0; i < storedClickedButtons.length; i++){
        for (j = 0; j < children.length; j++){
            storedClickedButtons.splice([j], 1);
        }
    }
    for (i = 0; i < children.length; i++){
        if (children[i].classList.contains('btn-off') && children[i].classList.contains('quiz-button1')){
            if (children[i].classList.contains('quiz_left')){
                leModifier = -1;
            }
            else if (children[i].classList.contains('quiz_right')){
                reModifier = -1;
            }
        }
        else if (children[i].classList.contains('btn-off') && children[i].classList.contains('quiz-button2')){
            if (children[i].classList.contains('quiz_right')){
                leModifier = 0;
            }
            else if (children[i].classList.contains('quiz_right')){
                reModifier = 0;
            }
        }
    }

    if (event.target.classList.contains('quiz_right') && event.target.classList.contains('quiz-button1')){
        reScore.value = reRunningTotal + reModifier + 1;
        console.log(event.target);
        console.log(reScore.value);
    }
    else if (event.target.classList.contains('quiz_left') &&
        event.target.classList.contains('quiz-button1')){
        leScore.value = leRunningTotal + leModifier + 1;
    }
    else if (event.target.classList.contains('quiz_right') &&
        event.target.classList.contains('quiz-button2')){
        reScore.value = reRunningTotal + reModifier;
    }
    else if (event.target.classList.contains('quiz_left') &&
        event.target.classList.contains('quiz-button2')){
        leScore.value = leRunningTotal + leModifier;
    }

    totalScore.value = Number(reScore.value) + Number(leScore.value);

}



function activatePair(){

    let questionParent = event.target.closest('.question-par');
    let children = questionParent.children;

    for (i = 0; i < children.length; i++){
        children[i].classList.remove('btn-off');
        children[i].removeAttribute('style');
    }

    Object.assign(event.target.style, buttonStyles);
    event.target.classList.add('btn-off');

}

