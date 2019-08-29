var addButton=document.querySelectorAll(".drum").length
for(i=0;i<addButton;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
  // alert("hello world");
  var className=this.getAttribute("class")[0];
  makeSound(className);
  //console.log(this);
  buttonAnimation(className);
});
}

// keypress
  document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
  });




  function makeSound(key){
    var key1=key.toLowerCase();
    switch (key1) {
      case 'w': var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                // alert("this is w");
                break;
      case 'a': var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                // alert("this is a");
                break;
      case 's': var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                // alert("this is s");
                break;
      case 'd': var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                // alert("this is d");
                break;
      case 'j': var snare=new Audio("sounds/snare.mp3");
                snare.play();
                // alert("this is j");
                break;
      case 'k':var crash=new Audio("sounds/crash.mp3");
                crash.play();
                // alert("this is k");
                break;
      case 'l': var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                // alert("this is l");
                break;
      default:console.log("default"); 
                break;
    }
  }

  function buttonAnimation(currentKey){
    var currentButton=document.querySelector("."+currentKey);
    currentButton.classList.add("pressed");
    setTimeout(function(){
      currentButton.classList.remove("pressed");
    },100);
  }
