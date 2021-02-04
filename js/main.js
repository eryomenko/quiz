var slider = document.getElementById("slider-step4");
var output = document.getElementById("slider-output-step4");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = slider.value;
    slider.style.background = 'linear-gradient(to right, #FFC930 0%, #FFC930 ' + slider.value*4 + '%, #F6F6F6 ' + slider.value*4 + '%, #F6F6F6 100%)';
};

var localResults = {};

const quiz = document.getElementById('quiz');
const btnBack = document.getElementById('btn-back');
const btnNext = document.getElementById('btn-next');
const questions = document.getElementsByClassName('quiz__questions');
const input = document.getElementsByClassName('quiz__input');

for (var i = 1; i < 4; i++) {
    questions[i].style.display = 'none';
}

// мы на первом вопросе
var q = 0;


quiz.onchange = function(event){
    if (event.target.classList.contains('quiz__input')) {
        localResults[event.target.name] = event.target.nextSibling.nextSibling.innerHTML;

        // когда что-то выбрано - становится активной кнопка Далее
        btnNext.disabled = false;

        if (q > 0) {
            // кнопка Назад тоже активна
            btnBack.disabled = false;
        }
        if (q === 3) {
            btnNext.disabled = true;
            localResults[event.target.name] = event.target.parentNode.previousSibling.previousSibling.innerHTML;
        }

        console.log(localResults);
    }
};

quiz.onclick = function(event) {
    if (event.target.classList.contains('quiz__next')) {
        btnNext.disabled = true;
        questions[q].style.display = 'none';
        questions[q+1].style.display = 'block';
        q++;
        if (q > 0) {
            // кнопка Назад тоже активна
            btnBack.disabled = false;
        }
        if (q === 3) {
            btnNext.disabled = true;
        }
    }
    

    if (event.target.classList.contains('quiz__back')) {   
        questions[q].style.display = 'none';
        questions[q-1].style.display = 'block';
        q--;
        if (q === 0) {
            btnBack.disabled = true;
        }
    }
};

// quiz.addEventListener('change', (event) => {
//     if (event.target.classList.contains('quiz__input')) {
//         localResults[event.target.name] = event.target.nextSibling.nextSibling.innerHTML;

//         // когда что-то выбрано - становится активной кнопка Далее
//         btnNext.disabled = false;

//         if (q > 0) {
//             // кнопка Назад тоже активна
//             btnBack.disabled = false;
//         }
//         if (q === 3) {
//             btnNext.disabled = true;
//             localResults[event.target.name] = event.target.parentNode.previousSibling.previousSibling.innerHTML;
//         }

//         console.log(localResults);
//     }
// });

// quiz.addEventListener('click', (event) => {
//     if (event.target.classList.contains('quiz__next')) {
//         btnNext.disabled = true;
//         questions[q].style.display = 'none';
//         questions[q+1].style.display = 'block';
//         q++;
//         if (q > 0) {
//             // кнопка Назад тоже активна
//             btnBack.disabled = false;
//         }
//         if (q === 3) {
//             btnNext.disabled = true;
//         }
//     }
    

//     if (event.target.classList.contains('quiz__back')) {   
//         questions[q].style.display = 'none';
//         questions[q-1].style.display = 'block';
//         q--;
//         if (q === 0) {
//             btnBack.disabled = true;
//         }
//     }
// });