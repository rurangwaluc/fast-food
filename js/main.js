// Submit form with id function.
const submit_by_name = () => {
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const email = document.getElementById('emaily').value;
  const subject = document.getElementById('sub').value;
  const message = document.getElementById('message').value;

  if (validation()) {
    // Calling validation function
    const x = document.getElementsByName('form');
    x[0].submit(); //form submission
    alert(
      'First-Name : ' + firstName +
      '      Last-Name : ' + lastName +
      '                             Email :   ' + email +
      '      Subject : ' + subject +
      '                 Message : ' + message +
      '      Form  Successfully  Submitted!!!'
    );

  }

}

// Name and Email validation Function.
const validation = () => {
  let fname = document.getElementById('first-name').value;
  let lname = document.getElementById('last-name').value;
  let email = document.getElementById('emaily').value;
  let subject = document.getElementById('sub').value;
  let message = document.getElementById('message').value;
  let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (fname === '' || lname === '' || email === '' || subject === '' || message === '') {
    alert('Please fill all fields...!!!!!!');
    return false;
  } else if (!email.match(emailReg)) {
    alert('Invalid Email...!!!!!!');
    return false;
  } else {
    return true;
  }
}