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
  check: function(ol, answers, correct) {
    let children =  ol.children;
    let checkedArr = [];
    for(let i = 0; i < children.length; i++) {
      let radio = children[i].lastChild;
      let value = children[i].firstChild;
      if(radio.checked == true) {
        if(correct == value.textContent) {
          answers.push([value.textContent, true]);
        } else {
          answers.push([value.textContent, false]);
        }
      } else {
        checkedArr.push(['No Answer', false]);
      }
    }
    // check if no one of radio is checked
    if (checkedArr.length === 4) {
      answers.push(false)
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
  check: function(ol, answers, correct) {
    let arr = [];
    for(let i = 0; i < ol.children.length; i++) {
      let checkbox = ol.children[i].lastChild;
      let value = ol.children[i].firstChild;
      if(checkbox.checked == true) {
        arr.push(value.textContent);
      }
    }
    // function to compare arrays
    function checkArr(arr1, arr2) {
      if(arr1.length !== arr2.length) {
        return false
      }
      for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
    // compare arrays
    if(checkArr(arr, correct) == true) {
      answers.push(true);
    } else {
      answers.push(false);
    }
  }
}
export{radioStrategy, checkboxStrategy}
