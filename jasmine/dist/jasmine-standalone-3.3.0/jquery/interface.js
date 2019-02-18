$ (document).ready(function() {

  var game = new Game();
  var frame = new Frame(1);
  var count = 1
  var updateTotals = function() {
    var i;
    for (i = 1; i < game.frames.length; i++) {
      $(`#total${i}`).text(game.frames[i-1].finalScore)
    }
    $('#runningtotal').text(game.runningTotal)
  }


  $('.btn-toolbar').on('click', '[id]', function() {
    var buttonPressed = $(this).attr('id');
    var pinsDown = Number(buttonPressed);

    frame.bowl === 'A' ? handleButton(pinsDown, 'A') : handleButton(pinsDown, 'B');
  });

  let handleButton = function(pinsDown, bowl) {
    if (bowl === 'B'){
        game.handlePreviousStrike(frame, pinsDown);

        frame.bowlB(pinsDown);
          if (frame.spare) {
          $(`#${frame['id']}B`).text('/');
          } else {
          $(`#${frame['id']}B`).text(pinsDown);

          frame.completeFrame();
          game.addToTotal(frame.finalScore);

          $(`#total${frame['id']}`).text(frame.finalScore);
          };

    // do the following only if this isn't the 10th frame
    // if it is, dont save
        game.save(frame);
        count++
        frame = new Frame(count)

        console.log(game);
        updateTotals();
    }
        else if (bowl === 'A') {

        game.handlePreviousSpare(frame, pinsDown);
        game.handlePreviousStrike(frame, pinsDown);

        //AND THEN AFTERWARDS
          frame.bowlA(pinsDown);
          if (frame.strike) {
              $(`#${frame['id']}B`).text('X');

              game.save(frame);
              count++
              frame = new Frame(count)
          } else {
              $(`#${frame['id']}A`).text(pinsDown);
          };
      console.log(game);
      updateTotals();
    };
  };



});
