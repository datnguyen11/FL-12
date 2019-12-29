const minLoginLength = 5;
const minPassLength = 6;
const users = {
  'admin@gmail.com': 'AdminPass',
  'user@gmail.com': 'UserPass'
};
let hasLogined = false;

let visitorLogin = prompt('Please enter your login');
if (!visitorLogin || visitorLogin.trim().length === 0) {
  alert('Canceled!');
} else if (visitorLogin.length < minLoginLength) {
  alert("I don't know any emails having name length less than 5 symbols");
} else if (users.hasOwnProperty(visitorLogin)) {
  let visitorPassword = prompt('Please enter your password');
  if (!visitorPassword) {
    alert('Canceled!');
  } else if (visitorPassword !== users[visitorLogin]) {
    alert('Wrong Password!');
  } else {
    hasLogined = true;
  }
} else {
  alert("I dont't know you");
}

if (hasLogined) {
  if (confirm('Do you want to change your password?')) {
    let oldPassWordCheck = prompt('Please enter your old password');
    if (!oldPassWordCheck) {
      alert('Canceled!');
    } else if (oldPassWordCheck !== users[visitorLogin]) {
      alert('Wrong old password!');
    } else {
      let newPassword = prompt('Please enter your new password');
      if (!newPassword) {
        alert('Canceled!');
      } else if (newPassword.length < minPassLength) {
        alert('It’s too short password');
      } else {
        let newPasswordCheck = prompt('Re-enter your new password');
        if (!newPasswordCheck) {
          alert('Canceled!');
        } else if (newPassword !== newPasswordCheck) {
          alert('You wrote the wrong password');
        } else {
          alert('You have successfully changed your password.');
        }
      }
    }
  } else {
    alert('You have failed the change');
  }
}
