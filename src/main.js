import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { TronaldDump, KanyeRest } from './quote';


$(document).ready(function() {
  $('#bikeSubmit').click(function() {
    // const city = $('#location').val();
    // $('#location').val("");


    let tronaldDump = new TronaldDump();  // create instance of BikeIndex class
    console.log(promise);
    let promise = tronaldDump.getDTQuotes();  // call the instance method and pass in user input

    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.bikeApiReturn').text(body);
      console.log(body);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
