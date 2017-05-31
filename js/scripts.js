$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat").prepend("<li>Meow (purrrrr)</li>");
    $("ul#cat").children("li").first().click(function() {
      $("h2#catColumn").before("<img id='catpic' class='begone' src='img/cat.png'>");
      $("img.begone").click(function() {
        $(this).remove();
      });
    });
  });

  $("button#dog").click(function() {
    $("ul#dog").prepend("<li>Woof! Grrrrrrr</li>");
    $("ul#dog").children("li").first().click(function() {
      $("h2#dogColumn").before("<img id='dogpic' class='begone' src='img/dog.png'>");
      $("img.begone").click(function() {
        $(this).remove();
      });
    });
  });


});
