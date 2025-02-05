document.addEventListener('DOMContentLoaded', () => {
    const formData = {
        email: "",
        message: ""
    };

    const form = document.querySelector('.feedback-form');

    if (form) {
        
        form.addEventListener('input', (event) => {
            const { name, value } = event.target;

            if (name === 'email') {
                formData.email = value.trim();
            } else if (name === 'message') {
                formData.message = value.trim();
            }

            localStorage.setItem('feedback-form-state', JSON.stringify(formData));
        });

        
        window.addEventListener('load', () => {
            const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

            if (savedData) {
                formData.email = savedData.email || '';
                formData.message = savedData.message || '';

                form.email.value = formData.email;
                form.message.value = formData.message;
            }
        });

        
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (formData.email === "" || formData.message === "") {
                alert("Fill please all fields"); 
            } else {
                console.log(formData); 
             
                localStorage.removeItem('feedback-form-state');
                formData.email = "";
                formData.message = "";
                form.email.value = "";
                form.message.value = "";
            }
        });
    } else {
        console.error('Form with class .feedback-form not found.');
    }
});
