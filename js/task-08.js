const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: {email, password},
    } = event.currentTarget;
    const inputVelue = {
        email: `${email.value}`,
        password: `${password.value}`,
    };
    if (email.value === '' || password.value ==='') {
        window.alert("Всі поля повинні бути заповнені")
    } else {
        console.log(inputVelue);
        event.target.reset();
    }
})
