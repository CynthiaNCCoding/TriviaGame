
$("#strtBtn").on("click", function () {

  // Start button hides
  $('#strtBtn').prop("disabled", true);

  // End of game stats are removed
  $("#correct").html("");
  $("#wrong").html("");
  $("#unanswered").html("");
  $("#reveal").html("");

  // Board is revealled, picture hidden
  $(".quiz").show();
  $("img").hide();

  // Timer starts counting down from var seconds
  function countdown() {
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + seconds;
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } 

        // If timer has stopped
        else {
            $("#counter").html("Game Over");
            // function() {
              var correct = $("input.QA:checked").length;
              var incorrect = $("input.wrong:checked").length;
              var unanswered = 10 - (correct + incorrect);

              $("#correct").html("Correct answers: " + correct);
                console.log(correct);
              $("#wrong").html("Incorrect answers: " + incorrect);
                console.log(incorrect);
              $("#unanswered").html("Unanswered: " + unanswered);
                console.log(unanswered);
              $(".reveal").html("      Correct Answer");
        }
    }
    tick();
  }  

  countdown();
});

