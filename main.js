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
  // result list
  const resultList = document.getElementById('results');
  // hadler arrays
  let answers = [];
  // declare count for questions array
  let count = 0;

  // define function which fill head and radio buttons, + confirm, and give you a 10 sec to decide
  function loop() {
    // fill head
    questH.innerHTML = questions[count].quest;
    setTimeout(function() {
      count++;
      if(count < questions.length) {
        answers.push('NA');
        loop();
      }
    }, 10000)
  }

  function showResult() {
    // quizDiv.className = 'hide';
    // resultDiv.className = '';
    // for(let i = 0; i < answers.length; i++) {
    //   const resultLi = document.createElement('li');
    //   if(answers[i] == questions[i].correct) {
    //     resultLi.textContent = answers[i] + ' correct!';
    //   } else {
    //     resultLi.textContent = answers[i] + ' wrong!';
    //   }
    //   resultList.appendChild(resultLi);
    // }
  }

  // add event listener on go button
  goButton.addEventListener('click', function() {
    greetDiv.className = 'hide';
    quizDiv.className = '';
    loop();
  });

  // add event listener on confirm button
  // confButton.addEventListener('click', function() {
  //   // loop through the radios to find checked one
  //   for(let i = 0; i < options.length; i++) {
  //     // if checked, push answers to answers array
  //     // if we have a qustions before use loop function again,
  //     // if else
  //     if(options[i].checked === true) {
  //       answers.push(optSpans[i].textContent);
  //       count++;
  //       console.log(answers);
  //       if(count < questions.length) {
  //         loop();
  //       } else {
  //         showResult();
  //       }
  //     }
  //   }
  // })

  submButton.addEventListener('click', function() {
    resultDiv.className = 'hide';
    greetDiv.className = '';
  })
}
