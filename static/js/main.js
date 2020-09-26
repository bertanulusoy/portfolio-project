$(document).ready(function(){

  var $btns = $('.button-group button');
  
  $btns.click(function(e){

    $('.button-group button').removeClass('active');
    e.target.classList.add('active');

    var selector = $(e.target).attr('data-filter');
    $('.grid').isotope({
      filter: selector
    });

    return false;
  });

  $("#btn1").trigger('click');

});