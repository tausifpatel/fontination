document.addEventListener('click', function(event){
  document.getElementById(parseInt(event.target.id)).contentEditable = true;
});
