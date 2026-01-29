
function register() {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;
   const confirm = document.getElementById('confirm').value;

   if (username.length === 0 || password.length === 0 || confirm.length === 0) {
    alert("Username,Password and Confirmation is required")
   }
   if (username !== 'Justine' && password && confirm === '12345') {
    alert('username is not correct')
   }
   if (username === 'Justine' && password && confirm !== '12345') {
        alert('password mismatch')
   }
   if (username !== 'Justine' && password && confirm !== '12345') {
    alert('username and password incorrect')
   }
    if ((username === 'Justine') && (password === '12345') && (confirm==='password')) {
    alert('Login successful');
    }
   
}
