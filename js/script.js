// document.querySelectorAll('#head').addEventListener("click", editable);

// function editable(){
// 	document.querySelector('#head').contentEditable = true;
// }


// let el = document.querySelectorAll('h1');

// for(var i=0; i < el.length; i++){
//     var memory = el[i];
//     memory.addEventListener('click',function(){
//     	memory.setAttribute('contenteditable',true);
//     });
// }

// Add event listener
// run loop
// compare if it is required ID
// select query to edit the content


document.addEventListener('click', function(event){
  for(var i = 0; i < 8; i++){
    if(parseInt(event.target.id) === i){
      document.getElementById(i).contentEditable = true;
    }
  }
});
