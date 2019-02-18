function Game() {
  this.frames = [];
  this.runningTotal = 0;
};

Game.prototype.save = function(frame) {
  this.frames.push(frame);
};

Game.prototype.addToTotal = function(num) {
  this.runningTotal += num;
};

Game.prototype.getAPreviousFrame = function(currentFrame, amountOfFramesBack) {
  var idOfPreviousFrame = (currentFrame['id'] - amountOfFramesBack);
  return this.frames.find(x => x.id === idOfPreviousFrame);
};

Game.prototype.handlePreviousSpare = function(currentFrame, pinsDown) {

        var previous = this.getAPreviousFrame(currentFrame, 1);

        if (previous !== undefined) {
            if (previous.spare === true) {
                previous.scores.push(pinsDown);
                previous.completeFrame();
                this.addToTotal(previous.finalScore);
                return previous;
            } else {
                return false;
            };
        };
};

Game.prototype.handlePreviousStrike = function(currentFrame, pinsDown) {

      var previous = this.getAPreviousFrame(currentFrame, 1);

      if (previous !== undefined) {
        if ( (currentFrame.bowl === 'A') && (previous.strike === true) ) {
          previous.scores.push(pinsDown);
            if (this.frames.length >= 2) {
                var previousprevious = this.getAPreviousFrame(currentFrame, 2);
                  if ( previousprevious.strike === true ) {
                    previousprevious.scores.push(pinsDown);
                    previousprevious.completeFrame();
                    this.addToTotal(previousprevious.finalScore);
                  };
            };
      } else if ( (currentFrame.bowl === 'B') && (previous.strike === true) ) {
          previous.scores.push(pinsDown);
          previous.completeFrame();
          this.addToTotal(previous.finalScore);
      } else {
        return false;
      };
    };
};
