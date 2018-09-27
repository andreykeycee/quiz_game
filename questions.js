window.onload = function() {

  // options
  const optionOl = document.getElementById('options');

  const Question = function(quest, optionsChoise, correct) {
    this.quest = quest;
    this.optionsChoise = optionsChoise;
    this.correct = correct
  }
  // make a prototype of strategies for Quesion
  Question.prototype.choise = function() {
    return this.optionsChoise();
  }
  // define strategies
  const radioStrategy = function(radioChoises) {
    for(let i = 0; i < radioChoises.length; i++) {
      const radio = document.createElement('input');
      const li = document.createElement('li');
      radio.type = 'radio';
      radio.name = 'choises';
      li.textContent = radioChoises[i];
      li.appendChild(radio);
      optionOl.appendChild(li);
    }
  }

  // const radioBlock = new optionsChoise(radioStrategy);


  const Q1 = new Question('How many choises here?', radioStrategy([2, 3, 4, 5]), 4);
        // Q2 = new Question('How many legs human have?', [2, 3, 4, 5], 2),
        // Q3 = new Question('How many legs spiders have?', [3, 8, 4, 5], 8);

  const questions = [Q1];
};
