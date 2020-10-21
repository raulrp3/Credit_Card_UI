$(function() {
    // CAMBIAR VALOR NÚMERO DE LA TARJETA DE CRÉDITO
    $('#card-number-input').keyup(function() {
        let value = $(this).val();
        let aux = value.replace(/ /g, "");

        setNumberCard(aux);

        if (aux.length % 4 == 0 && aux.length != 16) {
            $(this).val(value + '   ');
        }
    });

    // CAMBIAR VALOR NOMBRE Y APELLIDOS DE LA TARJETA DE CRÉDITO
    $('#card-name-input').keyup(function() {
        let value = $(this).val();
        let cardNameLabel = $('.card-name-label');

        if (value === '') {
            // RESETEAMOS LOS VALORES POR DEFECTO
            setText('NOMBRE Y APELLIDOS', cardNameLabel);
        } else {
            setText(value.toUpperCase(), cardNameLabel);
        }
    });

    // CAMBIAR VALOR MES DE LA TARJETA DE CRÉDITO
    $('#card-date-month-input').change(function() {
        let value = $(this).val();
        let cardDateMonthLabel = $('.card-date-month-label');

        setText(value, cardDateMonthLabel);
    });

    // CAMBIAR VALOR AÑO DE LA TARJETA DE CRÉDITO
    $('#card-date-year-input').change(function() {
        let value = $(this).val();
        let cardDateYearLabel = $('.card-date-year-label');

        setText(value, cardDateYearLabel);
    });

    // ROTAR TARJETA AL SELECCIONAR INPUT PARA MODIFICAR CVV
    $('#card-cvv-input').focus(function() {
        $('.flip-card .flip-card-inner').css('transform', 'rotateY(180deg)');
    });

    // ROTAR TARJETA AL SELECCIONAR OTRO INPUT
    $('#card-cvv-input').blur(function() {
        $('.flip-card .flip-card-inner').css('transform', 'rotateY(0deg)');
    });

    // CAMBIAR VALOR CVV DE LA TARJETA DE CRÉDITO
    $('#card-cvv-input').keyup(function() {
        let value = $(this).val();
        let cardCvvLabel = $('.card-cvv-label');

        setText(value, cardCvvLabel);
    })
});

function setText(value, element) {
    element.text(value);
}

function setNumberCard(value) {
    let cardNumberLabel = $('#card-number-label');

    if (value.length <= 16) {
        $('#card-number-label span').remove();

        for (let i = 0; i < value.length; i++) {
            if (i % 4 == 0) {
                cardNumberLabel.append($('<span></span>').addClass('space'));
            }

            cardNumberLabel.append($('<span></span>').text(value[i]));
        }
    }
}