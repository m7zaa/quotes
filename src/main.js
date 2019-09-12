import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { TronaldDump, KanyeRest, NumberGenerator } from './quote';


$(document).ready(function() {
  // let score = 0;
  $('#start').click(function(){
    $(".gamePlay").show();
    $("#start").hide();
    let player = {score:0};
  $('#getQuote').click(function() {
    $(".hidden").hide();
    // $(".donaldQuote").hide();
    // $(".donaldCorrect").hide();
    // $(".kanyeCorrect").hide();
    // $(".wrongAnswer").hide();
    const randomNumber = new NumberGenerator();
    const number = randomNumber.randomNumber1();
    console.log(number);
    let tronaldDump = new TronaldDump();  // create instance of Trump Quotes
    let promise = tronaldDump.getDTQuotes();  // call the instance method and pass in user input

    promise.then(function(response) {
      const body = JSON.parse(response);
      if (number < 3) {
        $('.donaldQuote').text(body.value).show();
      }else {
        console.log("dt false");
      }
    },
    function(error) {
      console.log( `There was an error processing your request: ${error.message}`);
    });
    let kanyeRest = new KanyeRest();  // create instance of Kanye West
    let promise2 = kanyeRest.getKWQuotes();  // call the instance method and pass in user input
    promise2.then(function(response) {
      const body = JSON.parse(response);
      if (number >= 3) {
        $('.kanyeQuote').text(body.quote).show();
      }else {
        console.log("kanye false");
      }
    }, function(error) {
      console.log(`There was an error processing your request: ${error.message}`);
    });

    $("#donald").click(function(){
      if (number < 3) {
        $(".hidden").hide();
        $(".donaldCorrect").show();
        $("#donald").off();
        $("#kanye").off();
        player.score ++;
      } else {
        $(".hidden").hide();
        $(".wrongAnswer").show();
        $("#donald").off();
        $("#kanye").off();
        player.score = 0;
      }
      $(".score").text(player.score);
    });

    $("#kanye").click(function(){
      if (number >= 3) {
        $(".hidden").hide();
        $(".kanyeCorrect").show();
        $("#donald").off();
        $("#kanye").off();
        player.score ++;
      } else {
        $(".wrongAnswer").show();
        $(".kanyeCorrect").hide();
        $("#donald").off();
        $("#kanye").off();
        player.score = 0;
      }
      $(".score").text(player.score);
    });


  });

});

});
