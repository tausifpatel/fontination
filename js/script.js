document.addEventListener('click', function(event){
  document.getElementById(parseInt(event.target.id)).contentEditable = true;
});


// Previous code
// document.addEventListener(‘click’, function(event){
//   for(var i = 0; i < 20; i++){
//     if(parseInt(event.target.id) === i){
//       document.getElementById(i).contentEditable = true;
//     }
//   }
// });
