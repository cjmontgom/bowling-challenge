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
    if (frame.bowl === 'A') {
      handleButton(pinsDown, 'A');
    } else if (frame.bowl === 'B') {
      handleButton(pinsDown, 'B');
    } else if (frame.strike || frame.spare){
      handleButton(pinsDown, 'C');
    };
  });

  let handleButton = function(pinsDown, bowl) {
    if (bowl === 'B'){

      if (frame.id === 10) {
        handleTenthFrame(pinsDown, bowl);
      } else {

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
            game.save(frame);
            count++
            frame = new Frame(count)

          console.log(game);
          updateTotals();
        };
    }
      else if (bowl === 'A') {

          if (frame.id === 10) {
            handleTenthFrame(pinsDown, bowl);
          } else {

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
        updateTotals(); //why is this one not working

        };
    } else if (bowl === 'C') {
      console.log('am i here')
      handleTenthFrame(pinsDown, bowl);
    }
  };

  let handleTenthFrame = function(pinsDown, bowl) {
    if (bowl === 'A') {
      game.handlePreviousSpare(frame, pinsDown);
      game.handlePreviousStrike(frame, pinsDown);
      frame.bowlA(pinsDown);
      if (pinsDown === 10) {
        $(`#${frame['id']}A`).text('X');
        frame.remainingPins = 10;
      } else {
        $(`#${frame['id']}A`).text(pinsDown);
      };
      console.log(game)
      console.log(frame)
    } else if (bowl === 'B') {
      game.handlePreviousStrike(frame, pinsDown);
      frame.bowlB(pinsDown)
      if (frame.strike === true) {
        if (pinsDown === 10) {
          $(`#${frame['id']}B`).text('X');
          frame.remainingPins = 10;
        } else {
          $(`#${frame['id']}B`).text(pinsDown);
        }
      } else {
        if (frame.spare === true) {
          $(`#${frame['id']}B`).text('/');
          frame.remainingPins = 10;
        } else {
          $(`#${frame['id']}B`).text(pinsDown);
          frame.completeFrame();
          game.save(frame);
          game.addToTotal(frame.finalScore);
          $(`#total10`).text(frame.finalScore);
        };
      };
      console.log(game)
      console.log(frame)
    } else if (bowl === 'C') {
      frame.bowlC(pinsDown)
      if (pinsDown === 10){
        $(`#${frame['id']}C`).text('X');
        $(`#total10`).text(frame.finalScore);

      } else {
        $(`#${frame['id']}C`).text(pinsDown);
        $(`#total10`).text(frame.finalScore);
      };
      frame.completeFrame();
      game.save(frame);
      game.addToTotal(frame.finalScore);
      $('#runningtotal').text(game.runningTotal)

    }
    console.log(game)
    console.log(frame)
    updateTotals();
  };
});
