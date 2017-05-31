$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat").prepend("<li>Meow (purrrrr)</li>");
    $("ul#cat").children("li").first().click(function() {
      $("img#catpic").toggle();
    });

  });

  $("button#dog").click(function() {
    $("ul#dog").prepend("<li>Woof! Grrrrrrr</li>");
    $("ul#dog").children("li").first().click(function() {
      $("img#dogpic").toggle();
    });


  });
});
