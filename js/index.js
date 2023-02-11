document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // do not use just see.
    if(email === 'name@gmail.com' && password === 'secret'){
        window.location.href = 'inter_index.html';
    }
    else{
        alert('Invalid E-mail Or password')
    }
}) 