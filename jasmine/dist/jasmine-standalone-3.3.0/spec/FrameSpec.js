describe ('Frame', function() {

  var frame;

  beforeEach (function() {
    frame = new Frame(1);
  });

  describe('defaults', function() {

    it ('is created with an ID', function() {
      expect(frame.ID).toBe(1);
    });

    it ('cannot have an ID greater than 10', function() {
      expect(function(){frame = new Frame(11);}).toThrowError('Cannot have more than 10 frames in one game');
    });

    it ('has a score that starts as pending', function() {
      expect(frame.scoreStatus).toBe('pending');
    });

    it ('keeps count of amount of pins left standing', function() {
      expect(frame.pinsLeft).toBe(10);
    });

    it ('stores an array with the bowl scores', function() {
      frame.receiveBowl(3);
      expect(frame.bowl[0]).toBe(3);
    });

  });

  describe('receiveBowl', function() {

    it ('returns an error if the bowl score is greater than the pins left', function() {
      expect(function(){frame.receiveBowl(11);}).toThrowError('Cannot knock over more than the pins which remain standing');
    });

    it ('reduces the pins left standing by the bowl score',function() {
      frame.receiveBowl(4);
      expect(frame.pinsLeft).toBe(6);
    });

  });


  describe('calcScore', function() {

    it ('adds up the bowl scores for the frame', function() {
      frame.receiveBowl(4)
      frame.receiveBowl(3)
      expect(frame.calcScore()).toBe(7)
    });

    it ('sets the score to \'calculated\'', function() {
      frame.calcScore();
      expect(frame.scoreStatus).toBe('calculated');
    });

    it ('maintains a pending status for the score if there\'s been a strike or spare', function() {
      frame.receiveBowl(10)
      expect(frame.scoreStatus).toBe('pending')
    });

  });

});
