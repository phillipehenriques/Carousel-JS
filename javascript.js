$(".plus-btn").click(function () {
    $("body").toggleClass("menu-open");
  });

function trocar(id) {

  let maior = document.getElementById('principal') 
  if (maior != null) {
    maior.innerHTML = '<img class="img-bm" src="imagens/'+ id +'.jpg" alt=""/>'
  }

}

// JQUERY EFFECT <<

$(document).ready(function() {
  $(".column img").click(function() {
    console.clear();
    var newclass = $(this).attr("src");
    console.log(newclass);
    var oldclass = $("#expandedImg").attr("id");
    console.log(oldclass);

    $(".container").show();
    // show .container

    $("#expandedImg").attr('src', newclass).hide().fadeIn("slow");
    //set new source and hide element in order to be able to fade it in again
    // fade in works only on hidden elements

  });
});