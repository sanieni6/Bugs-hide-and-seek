// validation
const emailInput = document.getElementById('user-email');
const errorMessage = document.querySelector('.validation');
const message = document.createElement('span');
message.classList.add('error-message');
message.textContent = '*Please, the email address must be in lowercase';
errorMessage.appendChild(message);
// validation

// preserve data
const userName = document.getElementById('username');
const descriptionTextarea = document.getElementById('msg-input');
const validate = document.querySelectorAll('.input');


const renderInfo = () => {
  const formData = {
    userName: JSON.parse(localStorage.getItem('formData')).value,
    userEmail: JSON.parse(localStorage.getItem('formData')).value,
    message: JSON.parse(localStorage.getItem('formData')).value,
  };
  const storedData = JSON.parse(localStorage.getItem('formData'));
  userName.value = storedData.userName;
  emailInput.value = storedData.userEmail;
  descriptionTextarea.value = storedData.message;
};
const localStore = (event, value) => {
  formData[value] = event.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
};
window.onload = renderInfo;
validate.forEach((element) => element.addEventListener('keyup', (e) => {
  localStore(e, element.name);
}));

// preserve data

// validation
document.getElementById('forma').addEventListener('submit', (event) => {
  const email = emailInput.value;
  if (email.toLowerCase() !== email) {
    emailInput.style.border = '3px solid red';
    message.style.display = 'block';
    event.preventDefault();
  } else {
    message.style.display = 'none';
  }
});
// validation