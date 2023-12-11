document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (!username) {
        alert('Username is required');
        event.preventDefault();
    } else if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
        alert('Password should be at least 8 characters long, with one Caps, number and special character');
        event.preventDefault();
    }
});