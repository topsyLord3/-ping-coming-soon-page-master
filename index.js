const email = document.querySelector('input');
const button = document.querySelector('button');
const error = document.querySelector('.error');
const form = document.querySelector('form');




form.addEventListener('submit', checkEmail);

function checkEmail(e) {
    e.preventDefault();

    if (email.value == '') {
        error.innerText = 'Whoops! It looks like you forgot to add your email';
        error.style.color = 'hsl(354, 100%, 66%)';
        email.style.borderColor = 'hsl(354, 100%, 66%)'
        console.log('blank')
    } else if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        error.innerText = 'The email address is not formatted correctly';
        error.style.color = 'hsl(354, 100%, 66%)';
        email.style.borderColor = 'hsl(354, 100%, 66%)';
        console.log('invalid')
     } else {
        error.innerText = 'You will be notified';
        error.style.color = 'black';
        email.style.borderColor =  'hsl(223, 100%, 88%)';
        console.log('thanks')
     }
    
}







/*function validEmail(email) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
    
}
**/


