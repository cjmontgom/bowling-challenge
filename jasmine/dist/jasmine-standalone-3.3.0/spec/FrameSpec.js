describe ('Frame', function() {

  var frame;

  beforeEach (function() {
    frame = new Frame(1);
  });

  describe ('defaults', function() {
    it ('keeps a record of its remaining pins', function() {
      expect(frame.remainingPins).toEqual(10);
    });
    it ('has a strike property which starts as false', function() {
      expect(frame.strike).toBe(false);
    });
    it ('has a spare property which starts as false', function() {
      expect(frame.spare).toBe(false);
    });
    it ('keeps a list of scores', function () {
      expect(frame.scores).toEqual([]);
    });
    it ('has a final score which starts as pending', function() {
      expect(frame.finalScore).toBe('pending');
    });
  });

  describe ('bowlA', function() {
    it ('changes strike property to true if 10 pins are knocked down', function() {
      frame.bowlA(10);
      expect(frame.strike).toBe(true);
    });
    it ('reduces the remaining pins by the amount knocked down', function() {
      frame.bowlA(5);
      expect(frame.remainingPins).toEqual(5);
    });
    it ('adds the number knocked down to the frames scores', function() {
      frame.bowlA(5);
      expect(frame.scores).toEqual([5]);
    });
  });

  describe ('bowlB', function() {
    it ('alerts if the pins knocked down is greater than the remaining pins', function() {
      frame.bowlA(5);
      expect( function() {frame.bowlB(6);} ).toThrowError('Cannot knock down more pins than the remaining pins');
    });
    it ('changes spare property to true if all the pins are knocked down', function() {
      frame.bowlA(1);
      frame.bowlB(9);
      expect(frame.spare).toBe(true);
    });
    it ('reduces the remaining pins by the amount knocked down', function() {
      frame.bowlB(5);
      expect(frame.remainingPins).toEqual(5);
    });
    it ('adds the number knocked down to the frames scores', function() {
      frame.bowlA(2);
      frame.bowlB(5);
      expect(frame.scores).toEqual([2,5]);
    });
  });

  describe ('bowlC', function() {
    it ('alerts if the pins knocked down is greater than the remaining pins', function() {
      frame.remainingPins = 3;
      expect( function() {frame.bowlC(6);} ).toThrowError('Cannot knock down more pins than the remaining pins');
    });
    it ('reduces the remaining pins by the amount knocked down', function() {
      frame.bowlC(5);
      expect(frame.remainingPins).toEqual(5);
    });
    it ('adds the number knocked down to the frames scores', function() {
      frame.bowlC(5);
      expect(frame.scores).toEqual([5]);
    });
  });

});
