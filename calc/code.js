const btn= document.getElementById("btn");

btn.addEventListener('click', function(){
  var quantity = document.getElementById("quantity").value;
  var price = document.getElementById("price").value;
  alert("Preço por Kg: "+ ((1000 * price)/quantity));
});