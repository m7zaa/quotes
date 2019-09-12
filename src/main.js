import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { TronaldDump, KanyeRest, NumberGenerator, Giphy } from './quote';


$(document).ready(function() {
  $('#start').click(function(){
    $("#start").hide();
    let player = {score:0};
    $(".gamePlay").show();
    $(".hidden").hide();


  $('#getQuote').click(function() {
    $(".hidden").hide();
    $("#start").hide();
    $("#kanye").show();
    $("#donald").show();
    const randomNumber = new NumberGenerator();
    const number = randomNumber.randomNumber1();
    console.log(number);
    let tronaldDump = new TronaldDump();  // create instance of Trump Quotes
    let promise = tronaldDump.getDTQuotes();  // call the instance method and pass in user input

    promise.then(function(response) {
      const body = JSON.parse(response);
      if (number < 3) {
        $('.donaldQuote').text(body.value).show();
      } else {
        let kanyeRest = new KanyeRest();  // create instance of Kanye West
        let promise2 = kanyeRest.getKWQuotes();  // call the instance method and pass in user input
        promise2.then(function(response) {
          const body = JSON.parse(response);
          if (number >= 3) {
            $('.kanyeQuote').text(body.quote).show();
          } else {
            console.log("kanye false");
          }
        }, function(error) {
          console.log(`There was an error processing your request: ${error.message}`);
        });
      }
    },
    function(error) {
      console.log( `There was an error processing your request: ${error.message}`);
    });

    let kanyeTrumpGif = new Giphy();
    let promise3 = kanyeTrumpGif.getGif();

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
        promise3.then(function(response) {
      const body3 = JSON.parse(response);
      console.log(body3);
      console.log(process.env.API_KEY);
      $(".kanyeGif").html(`<img src="${body3.data.images.original.url}">`)
    }, function(error) {
      console.log(`There was an error processing your request: ${error.message}`);
    });
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
