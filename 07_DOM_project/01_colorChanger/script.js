const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target.id);
        if (e.target.id === 'peachpuff') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'lavenderblush') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'darkgray') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'cornflowerblue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'aquamarine') {
            body.style.backgroundColor = e.target.id;
        }
        
    })
    
})
 