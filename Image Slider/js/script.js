//create an  array image sources 
let images = [
    'image1.png','image2.png','image3.png','image4.png'
] 
let i=0;

//add initial images to canvas
let canvas=document.getElementById('canvas');
canvas.style.background = `url(img/${images[0]})`

//add event listners to array
let arrows=document.querySelectorAll('.arrow');
arrows.forEach(function(arrow){
    arrow.addEventListener('click',function(e){
    
    
        if(e.target.id==="left")
    {
i--;
if(i<0)
{
i=images.length-1;
}

canvas.style.background = `url(./img/${images[i]})`;
    }
    else if(e.target.id==="right")
    {
              i++;
              if(i>=images.length)
              {
                  i=0;
              }
              canvas.style.background = `url(./img/${images[i]})`;
    }
})
});