describe ('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe ('defaults', function() {
    it ('stores frames', function () {
      expect(game.frames).toEqual([]);
    });
    it ('has a running total', function() {
      expect(game.runningTotal).toEqual(0);
    });
  });

  describe ('save', function() {
    it ('adds a frame to this.frames', function() {
      game.save('frame');
      expect(game.frames).toContain('frame');
    });
  });

  describe ('addToTotal', function() {
    it ('adds to this.runningTotal', function() {
      game.addToTotal(5)
      expect(game.runningTotal).toEqual(5)
    });
  });

});
