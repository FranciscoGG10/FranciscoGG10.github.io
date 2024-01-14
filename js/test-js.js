let currentForm = 0;

function showForm(index) {
    $('.form-container').hide();
    $(`.form-container:eq(${index})`).show();
}

function updateNavigation() {
    $('#navList li').removeClass('active');
    $(`#navList li:eq(${currentForm})`).addClass('active');
}

function nextForm() {
    currentForm++;
    if (currentForm < $('.form-container').length) {
        showForm(currentForm);
        updateNavigation();
    } else {
        alert('Has llegado al final del carrusel');
        currentForm--;
    }
}

function prevForm() {
    currentForm--;
    if (currentForm >= 0) {
        showForm(currentForm);
        updateNavigation();
    } else {
        alert('Estás en el primer formulario');
        currentForm = 0;
    }
}

$(document).ready(function () {
    const totalForms = $('.form-container').length;

    for (let i = 0; i < totalForms; i++) {
        $('#navList').append(`<li onclick="goToForm(${i})">${i + 1}</li>`);
    }

    showForm(currentForm);
    updateNavigation();
	
	// Handler para el envío del formulario
    $('#finalForm').submit(function (event) {
        event.preventDefault();

        let sum = 0;
        $('input[type="radio"]:checked').each(function () {
            sum += parseInt($(this).val());
        });

        let percentage = (sum / 30) * 100;

        if (sum >= 0 && sum < 11) {
            $('#myModal1 span').html(`Tu porcentaje obtenido es: ${percentage.toFixed(2)}%`);
            window.location.href = '#myModal1'; // Activa el modal 1
        } else if (sum >= 11 && sum < 21) {
            $('#myModal2 span').html(`Tu porcentaje obtenido es: ${percentage.toFixed(2)}%`);
            window.location.href = '#myModal2'; // Activa el modal 2
        } else {
            $('#myModal3 span').html(`Tu porcentaje obtenido es: ${percentage.toFixed(2)}%`);
            window.location.href = '#myModal3'; // Activa el modal 3
        }
    });
});

function goToForm(index) {
    currentForm = index;
    showForm(currentForm);
    updateNavigation();
}

function goToForm(index) {
    currentForm = index;
    showForm(currentForm);
    updateNavigation();

    if (currentForm === $('.form-container').length - 1) {
        $('#finalForm').submit();
    }
}