cambio(0);

function cambio(n){
  var i;
  for (i = 0; i < 5; i++){
    if (i == n){
      document.getElementById("cajatexto"+i).style.display = "block";
    } else {
      document.getElementById("cajatexto"+i).style.display = "none";
    }
  }
}

function modalopen(n){
  var modal = document.getElementById("modal-"+n);
  modal.style.display = "block";
  document.querySelector("body").style.overflowY = "hidden";
}

function modalclose(n){
  var modal = document.getElementById("modal-"+n);
  modal.style.display = "none";
  document.querySelector("body").style.overflowY = "auto";
}