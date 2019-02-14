function Frame(id) {
  if(id > 10) {
    throw new Error('Cannot have more than 10 frames in one game');
  } else {
    this.ID = id;
  };
  this.scoreStatus = 'pending';
  this.pinsLeft = 10
  this.bowl = []
};

Frame.prototype.receiveBowl = function(bowlScore) {
  if (bowlScore > this.pinsLeft) {
    throw new Error('Cannot knock over more than the pins which remain standing');
  } else {
    this.pinsLeft -= bowlScore;
    this.bowl.push(bowlScore);
  };
};

Frame.prototype.calcScore = function () {
  if(this.pinsLeft === 0) {
    
  } else {
    this.changeScoreStatus();
    return this.bowl.reduce((a, b) => a + b, 0);
  };
};

Frame.prototype.changeScoreStatus = function () {
  this.scoreStatus === 'pending' ? this.scoreStatus = 'calculated' : this.scoreStatus = 'pending';
};
