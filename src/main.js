import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { TronaldDump, KanyeRest } from './quote';


$(document).ready(function() {
  $('#getQuote').click(function() {
    $(".kanyeQuote").hide();
    $(".donaldQuote").hide();
    let tronaldDump = new TronaldDump();  // create instance of Trump Quotes
    let promise = tronaldDump.getDTQuotes();  // call the instance method and pass in user input
    const randomNumber = Math.floor(Math.random() * 10);

    promise.then(function(response) {
      console.log(response);
      const body = JSON.parse(response);
      if (randomNumber < 3) {
        $('.donaldQuote').text(body.value).show();
      }else {
        console.log("dtfalse");
      }
    },
    function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });





  let kanyeRest = new KanyeRest();  // create instance of Kanye West
  let promise2 = kanyeRest.getKWQuotes();  // call the instance method and pass in user input

  console.log(promise2);
  promise2.then(function(response) {
    const body = JSON.parse(response);


    // const randomNumber1 = Math.floor(Math.random() * 10);
    if (randomNumber > 3) {
      $('.kanyeQuote').text(body.quote).show();
    }else {
      console.log("false");
    }
    // $('.kanyeQuote').text(body.quote);
    console.log(body.quote);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });
  });
});
