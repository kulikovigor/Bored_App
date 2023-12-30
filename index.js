const body = document.querySelector(".js-body");
const questionNode = document.querySelector(".js-question");
const answerNode = document.querySelector(".js-answer");
const BtnNode = document.querySelector(".js-btn");

const BORED_EMOJI = String.fromCodePoint(129300);
const FIRE_EMOJI = String.fromCodePoint(128293);
const TEXT_QUESTION = `${BORED_EMOJI} Are you bored?`;
const TEXT_ANSWER = `Find something to do`;
const GO_QUESTION = `Hooray! Now it is not boring ${FIRE_EMOJI}`;


function init() {
    questionNode.textContent = `${TEXT_QUESTION}`;
    answerNode.textContent = `${TEXT_ANSWER}`;
};

init();

function getIdea() {
    fetch('http://www.boredapi.com/api/activity/')
    .then((response) => {
        if(response.ok) {
            return response.json();
        }
    })
    .then((result) => {
        answerNode.textContent = result.activity;
        questionNode.textContent = `${GO_QUESTION}`;
        changeBackground();
    })
    .catch(() =>
      alert('Ошибка API. Проблемы с подключением к Сети.')
    );
};

function changeBackground() {
    body.style.background = 
        'linear-gradient(180deg, rgba(0, 176, 28, 0.20) 24.48%, rgba(255, 255, 255, 0.00) 100%)';
};

BtnNode.addEventListener('click', getIdea);