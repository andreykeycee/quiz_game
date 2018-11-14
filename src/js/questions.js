import {radioStrategy, checkboxStrategy} from './strategies'
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
  check: function(ol, answers, correct) {
    return this.strategy.check(ol, answers, correct);
  }
}


const Q1 = new Question('How many choises here?', new radioStrategy(), [2, 3, 4, 5], 4),
      Q2 = new Question(
        'Check things, which true', new checkboxStrategy(),
        ['white div', 'black sun', 'confirm button', 'you are an alien'],
        ['white div', 'confirm button']
      );

const questions = [Q1, Q2];
export{questions}
