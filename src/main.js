  
import { HungryBear1 } from './../src/hungrybear-level1.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  let fuzzy = new HungryBear1();
  let bearName;
  $("#startGame").click(function(event) {
    event.preventDefault();
    bearName = $("#bearname").val();
    $("#displayname").append(" " + bearName);
    $("#main").show();
    fuzzy.start();
    $("#intro").hide();

    let depleet = setInterval(function() {
      $('#hungry-level').text(fuzzy.foodLevel);
      $('#mood-level').text(fuzzy.moodLevel);
      $('#hunger-bar').css("width", fuzzy.foodLevel + "%");
      $('#mood-bar').css("width", fuzzy.moodLevel + "%");
      if(fuzzy.didYouGetEaten()){
        $("#displayName").text(fuzzy.name);
        $("#dead").show();
        clearInterval(depleet);
      }
    }, 1000);
  });

  $('#hungry-level').html(fuzzy.foodLevel);
  $('#mood-level').html(fuzzy.moodLevel);
  fuzzy.setHunger();
  fuzzy.setMood();
  console.log(setInterval);

  $("#hungry").click(function(event) {
    event.preventDefault();
    fuzzy.feed();
  });
});