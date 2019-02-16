function Game() {
  this.frames = [];
  this.runningTotal = 0;
};

Game.prototype.save = function(frame) {
  this.frames.push(frame)
};

Game.prototype.addToTotal = function(num) {
  this.runningTotal += num
};
