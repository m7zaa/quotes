import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { TronaldDump, KanyeRest, NumberGenerator } from './quote';


$(document).ready(function() {
  $('#getQuote').click(function() {
    $(".kanyeQuote").hide();
    $(".donaldQuote").hide();
    $(".donaldCorrect").hide();
    $(".kanyeCorrect").hide();
    $(".wrongAnswer").hide();
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
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
    let kanyeRest = new KanyeRest();  // create instance of Kanye West
    let promise2 = kanyeRest.getKWQuotes();  // call the instance method and pass in user input
    promise2.then(function(response) {
      const body = JSON.parse(response);
      // const number1 = Math.floor(Math.random() * 10);
      if (number > 3) {
        $('.kanyeQuote').text(body.quote).show();
      }else {
        console.log("kanye false");
      }
      // $('.kanyeQuote').text(body.quote);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });


    $("#donald").click(function(){
      if (number < 3) {
        $(".donaldCorrect").show();
        $(".wrongAnswer").hide();

      } else {
        $(".wrongAnswer").show();
        $(".donaldCorrect").hide();

        console.log("donald else")
        console.log(number)


      }
    });

    $("#kanye").click(function(){
      if (number >= 3) {
        $(".kanyeCorrect").show();
        $(".wrongAnswer").hide();

      } else {
        $(".wrongAnswer").show();
        $(".kanyeCorrect").hide();
      }
    });


  });


});
