window.onload = function() {
  // divs
  const greetDiv = document.getElementById('greetings');
  const quizDiv = document.getElementById('quiz');
  const resultDiv = document.getElementById('result-div');
  // buttons
  const goButton = document.getElementById('go');
  const confButton = document.getElementById('confirm');
  const submButton = document.getElementById('submit');
  // question head
  const questH = document.getElementById('question');
  // arrays from options
  const options = document.getElementsByName('option');
  const optSpans = document.getElementsByClassName('opt-span');
  // result list
  const resultList = document.getElementById('results');
  // hadler arrays
  let answers = [];

  function Question (quest, optionsChoise, correct) {
    this.quest = quest;
    this.answers = optionsChoise;
    this.correct = correct
  }

  const Q1 = new Question('How many choises here?', [2, 3, 4, 5], 4),
        Q2 = new Question('How many legs human have?', [2, 3, 4, 5], 2),
        Q3 = new Question('How many legs spiders have?', [3, 8, 4, 5], 8);

  const questions = [Q1, Q2, Q3];
  // declare count for questions array
  let count = 0;

  // define function which fill head and radio buttons, + confirm, and give you a 10 sec to decide
  function loop() {
    // fill head
    questH.innerHTML = questions[count].quest;
    // fill spans with answer options
    for(let j = 0; j < optSpans.length; j++) {
      optSpans[j].textContent = questions[count].answers[j];
    }
    setTimeout(function() {
      count++;
      if(count < questions.length) {
        answers.push('NA');
        loop();
      }
    }, 10000)
  }

  function go() {
    // clear greetings, show quiz
    greetDiv.className = 'hide';
    quizDiv.className = '';
    loop();
    console.log(answers);
  }
  function showResult() {
    quizDiv.className = 'hide';
    resultDiv.className = '';
    for(let i = 0; i < answers.length; i++) {
      const resultLi = document.createElement('li');
      if(answers[i] == questions[i].correct) {
        resultLi.textContent = answers[i] + ' correct!';
      } else {
        resultLi.textContent = answers[i] + ' wrong!';
      }
      resultList.appendChild(resultLi);
    }
  }
  // add event listener on go button
  goButton.addEventListener('click', go);

  // add event listener on confirm button
  confButton.addEventListener('click', function() {
    // loop through the radios to find checked one
    for(let i = 0; i < options.length; i++) {
      // if checked, push answers to answers array
      // if we have a qustions before use loop function again,
      // if else
      if(options[i].checked === true) {
        answers.push(optSpans[i].textContent);
        count++;
        console.log(answers);
        if(count < questions.length) {
          loop();
        } else {
          showResult();
        }
      } 
    }
  })
  submButton.addEventListener('click', function() {
    resultDiv.className = 'hide';
    greetDiv.className = '';
  })
}
