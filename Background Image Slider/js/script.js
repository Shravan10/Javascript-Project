(function() {
    const pictures = [
      "slider1",
      "slider2",
      "slider3",
      "slider4",
      "slider5"
    ];
//select both left and right button add event listner
//select both left and right button. Add event listeners
const buttons = document.querySelectorAll('.btn')
const imageDIV = document.querySelector('.img-container')
let counter = 0

buttons.forEach(function(button){
  button.addEventListener('click', function(e){
    if (button.classList.contains('btn-left')){
      counter--
      if(counter < 0){
        counter = pictures.length -1
      }
      imageDIV.style.backgroundImage = `url('./images/${pictures[counter]}.jpeg')`
    }
    if (button.classList.contains('btn-right')){
      counter++
      if(counter > pictures.length -1){
        counter = 0
      }
      imageDIV.style.backgroundImage = `url('./images/${pictures[counter]}.jpeg')`
    }
  })
})
})();