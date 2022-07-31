$(".plus-btn").click(function () {
    $("body").toggleClass("menu-open");
  });

function trocar(id) {

  let maior = document.getElementById('principal') 
  if (maior != null) {
    maior.innerHTML = '<img class="img-bm" src="imagens/'+ id +'.jpg" alt=""/>'
  }


}