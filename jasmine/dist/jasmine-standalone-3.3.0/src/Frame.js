function Frame(id) {
  this.remainingPins = 10;
  this.strike = false;
  this.spare = false;
  this.scores = [];
  this.finalScore = 'pending';
};

Frame.prototype.bowlA = function(num) {
  if (num === 10) {
    this.strike = true;
  }
  this.remainingPins -= num;
  this.scores.push(num);
};

Frame.prototype.bowlB = function(num) {
  if (num > this.remainingPins) {
    throw new Error('Cannot knock down more pins than the remaining pins');
  } else {
    if (num === this.remainingPins) {
      this.spare = true;
    };
    this.remainingPins -= num;
    this.scores.push(num);
  };
};

Frame.prototype.bowlC = function(num) {
  if (num > this.remainingPins) {
    throw new Error('Cannot knock down more pins than the remaining pins');
  } else {
    this.remainingPins -= num;
    this.scores.push(num);
  };
};
