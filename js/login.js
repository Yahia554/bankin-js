// user email
document.getElementById('login-submit').addEventListener('click', function () {
    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    // user pass
    const passwordFiled = document.getElementById('user-password');
    const userPassword = passwordFiled.value;
    // check maile
    if (userEmail == 'salman@sami.com' && userPassword == 'salman') {
        window.location.href = 'banking.html'
    }
});