import{questions} from './questions'
window.onload = function() {
  //options
  const optionOl = document.getElementById('options');
  // question head
  const questH = document.getElementById('question');
  // divs
  const greetDiv = document.getElementById('greetings');
  const quizDiv = document.getElementById('quiz');
  const resultDiv = document.getElementById('result-div');
  // buttons
  const goButton = document.getElementById('go');
  const confButton = document.getElementById('confirm');
  const submButton = document.getElementById('submit');

  // result list
  const resultList = document.getElementById('results');
  // hadler arrays
  let answers = [];
  // declare count for questions array
  let count = 0;

  goButton.addEventListener('click', function() {
    answers = [];
    count = 0;
    greetDiv.className = 'hide';
    quizDiv.className = '';
    loop();
  })

  confButton.addEventListener('click', function() {
    questions[count].check(optionOl, answers, questions[count].correct);
    count++;
    if(count < questions.length) {
      loop();
    } else {
      quizDiv.className = 'hide';
      resultDiv.className = '';
      showAnswers();
    }
  })

  submButton.addEventListener('click', function() {
    resultDiv.className = 'hide';
    greetDiv.className = '';
    document.querySelector('.answer-list').remove()
  })
 // define function which fill head and radio buttons, + confirm, and give you a 10 sec to decide
  function loop() {
    optionOl.innerHTML = '';
    questH.innerHTML = questions[count].quest;
    questions[count].render(questions[count].choises, optionOl);
    setTimeout(function() {
      count++;
      if(count < questions.length) {
        answers.push(false);
        loop();
      }
    }, 10000)
  }

  function showAnswers() {
    for(let i = 0; i < answers.length; i++) {
      let li = document.createElement('li');
      let userAnswers = []
      answers.forEach(function (el) {
        
      })
      li.innerHTML = answers[i];
      resultList.appendChild(li);
    }
  }
}
