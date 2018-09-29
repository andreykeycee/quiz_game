
// constructor question
const Question = function(quest, strategy, choises, correct) {
  this.quest = quest;
  this.strategy = strategy;
  this.choises = choises;
  this.correct = correct;
};

Question.prototype = {
  render: function(choises, ol) {
    return this.strategy.render(choises, ol);
  },
  check: function(choises, correct, answers) {
    return this.strategy.check(choises, correct, answers);
  }
}
// define strategy constructor
const Strategy = function() {};
// set strategy prototype
Strategy.prototype = {
  render: function() {},
  check: function() {}
};
// define strategies
const radioStrategy = function() {};
const checkboxStrategy = function() {};
// copy strategy properties from parent
radioStrategy.prototype = Object.create(Strategy.prototype);
checkboxStrategy.prototype = Object.create(Strategy.prototype);
// define radio strategy prototype
radioStrategy.prototype = {
  render: function(choises, ol) {
    for(let i = 0; i < choises.length; i++) {
      const li = document.createElement('li');
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'radio';
      li.textContent = choises[i];
      li.appendChild(radio);
      ol.appendChild(li);
    }
  },
  check: function(choises, correct, answers) {
    let answer;
    for(let i = 0; i < choises.length; i++) {
      if(choises[i].checked === true) {
        answer = choises[i];
      }
    }
    console.log(answer);
    if(answer == correct) {
      return answers.push(true);
    } else {
      return answers.push(false);
    }
  }
}
// define checkbox strategy render
checkboxStrategy.prototype = {
  render: function(choises, ol) {
    for(let i = 0; i < choises.length; i++) {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = 'checkbox';
      li.textContent = choises[i];
      li.appendChild(checkbox);
      ol.appendChild(li);
    }
  },
  check: function(choises, correct, answers) {
    let answer = [];
    for(let i = 0; i < choises.length; i++) {
      if(choises[i].checked === true) {
        answer.push(choises[i]);
      }
    }

    if(answer == correct) {
      return answers.push(true);
    } else {
      return answers.push(false);
    }
  }
}

const Q1 = new Question('How many choises here?', new radioStrategy(), [2, 3, 4, 5], 4),
      Q2 = new Question(
        'Check things, which true', new checkboxStrategy(),
        ['white div', 'black sun', 'confirm button', 'you are an alien'],
        ['white div', 'confirm button']
      );

const questions = [Q1, Q2];
