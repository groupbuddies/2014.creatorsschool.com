$(document).ready(function() {
  $('.js-has-class-details td').on('mouseenter', function(){
    var $el = getClassElement(this);
    $el.stop().fadeIn(100);
    $(this).parents('.js-has-class-details').append($el);
  });

  $('.js-has-class-details td').on('mouseleave', function(){
    var $el = getClassElement(this);
    $el.stop().fadeOut(100, function(){
      $('.class-details-box').append($el);
    });
  });

  var getClassElement = function(el){
    return $(".class-details." + $(el).attr('class'));
  };
});
