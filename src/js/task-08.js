const form = document.querySelector('.login-form')


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: {email, password},
    } = event.currentTarget;
    const inputVelue = {
        Email: `${email.value}`,
        Password: `${password.value}`,
    };
    console.log(inputVelue);
    if (email.value === '' || password.value ==='') {
        window.alert("Всі поля повинні бути заповнені")
    }

    event.target.reset();
})
