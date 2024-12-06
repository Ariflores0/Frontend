// Obtener referencias a los elementos
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const terms = document.getElementById("terms");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const termsError = document.getElementById("termsError");
const generalError = document.getElementById("generalError");
const successMessage = document.createElement("div");

// Validar campos del formulario
function validateForm() {
    let isValid = true;

    // Validación de correo
    if (!email.value.trim()) {
        emailError.textContent = "El correo es obligatorio.";
        emailError.style.display = "block";
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
        emailError.textContent = "El correo no tiene un formato válido.";
        emailError.style.display = "block";
        isValid = false;
    } else {
        emailError.style.display = "none";
    }

    // Validación de contraseña
    if (password.value.length < 8) {
        passwordError.textContent = "La contraseña debe tener al menos 8 caracteres.";
        passwordError.style.display = "block";
        isValid = false;
    } else {
        passwordError.style.display = "none";
    }

    // Validación de términos
    if (!terms.checked) {
        termsError.textContent = "Debes aceptar los términos y condiciones.";
        termsError.style.display = "block";
        isValid = false;
    } else {
        termsError.style.display = "none";
    }

    return isValid;
}

// Manejo del evento de envío del formulario
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario si hay errores

    // Limpieza de errores generales
    generalError.style.display = "none";
    generalError.classList.remove("show");
    successMessage.style.display = "none";

    // Validar el formulario
    if (validateForm()) {
        // Aquí iría la lógica de envío del formulario, como una llamada a la API o validación de credenciales
        successMessage.textContent = "Formulario enviado correctamente!";
        successMessage.classList.add("success-message");
        document.querySelector('.auth-container__right').appendChild(successMessage);
        successMessage.style.display = "block"; // Mostrar mensaje de éxito

        // Simular un retraso (animación suave)
        setTimeout(() => {
            form.reset(); // Resetear el formulario
            successMessage.style.display = "none"; // Ocultar mensaje de éxito
        }, 3000);
    } else {
        // Mostrar mensaje de error general si la validación falla
        generalError.textContent = "Por favor, corrige los errores antes de enviar el formulario.";
        generalError.classList.add("show");
        generalError.style.display = "block";
    }
});
