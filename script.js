$(document).ready(function() {
    
    let visitCounter = parseInt(localStorage.getItem('visitCounter')) || 0;
    let colorIndex = 0;
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];

    
    initializePage();

    
    function initializePage() {
        updateDateTime();
        updateVisitCounter();
        
        
        setInterval(updateDateTime, 1000);
        
       
        $('#visitCounter').text(visitCounter);
    }

   
    function updateDateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-ES');
        const dateString = now.toLocaleDateString('es-ES');
        
        $('#currentTime').text(timeString);
        $('#currentDate').text(dateString);
    }

    
    function updateVisitCounter() {
        visitCounter++;
        localStorage.setItem('visitCounter', visitCounter);
        $('#visitCounter').text(visitCounter);
    }

    
    $('#colorButton').click(function() {
        colorIndex = (colorIndex + 1) % colors.length;
        $('#targetText').css('color', colors[colorIndex]);
    });

    
    $('#toggleButton').click(function() {
        $('#hiddenContent').toggle();
    });

    
    $('.hover-effect').hover(
        function() {
            $(this).css({
                'background-color': '#f0f0f0',
                'transform': 'scale(1.05)',
                'transition': 'all 0.3s ease'
            });
        },
        function() {
            $(this).css({
                'background-color': '',
                'transform': 'scale(1)',
                'transition': 'all 0.3s ease'
            });
        }
    );

    
    $('#addButton').click(function() {
        const timestamp = new Date().toLocaleTimeString('es-ES');
        $('#itemList').append(`<li>Nuevo elemento añadido a las ${timestamp}</li>`);
    });

    
    $('#clearButton').click(function() {
        $('#itemList').empty();
        $('#itemList').append('<li>Lista limpiada - ¡Añade nuevos elementos!</li>');
    });

    
    $('#incrementCounter').click(function() {
        updateVisitCounter();
        $(this).text('¡Incrementado!').css('background-color', '#4CAF50');
        setTimeout(() => {
            $(this).text('Incrementar Contador').css('background-color', '');
        }, 1000);
    });

    
    

    // Mensaje de bienvenida
    console.log('Página cargada correctamente con funcionalidades Node.js');
    console.log('Contador de visitas:', visitCounter);
    console.log('Funciones disponibles: fetchWeatherData()');
});