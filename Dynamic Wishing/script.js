const date=new Date();
const hour=date.getHours();
const button=document.querySelector('button');
const messageArea=document.querySelector('#message');
button.addEventListener('click',function(){
    if(hour<12)
    {
        messageArea.innerHTML='<h1>Hello Good Morning</h1>';
    }
    else if(hour>=12 &&hour<16)
    {
        messageArea.innerHTML='<h1>Hello Afternoon!!!</h1>';
    }
    else if (hour>=16 && hour<=24)
    {
        messageArea.innerHTML='<h1>Hello Good Evening!!!</h1>';
    }
    
})

