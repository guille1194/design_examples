var main = function(){
    $('.btn').click(function(){
        var post = $('.status-box').val();
        //es la manera en que se despliega el texto
        $('<li>').text(post).prependTo('.posts');
        //sirve para limpiar messagebox
        $('.status-box').val('');
        //sirve para reiniciar el contador
        $('.counter').text('140');
        //para desabilitar el boton despues de mandar el mensaje
        $('.btn').addClass('disabled');
    });
    //keyup es similar a keypress
    $('.status-box').keyup(function(){
    //Aqui se almacena la longitud del texto escrito
    var postLength = $(this).val().length;
    //aqui se establece el limite de caracteres
    var charactersLeft = 140 - postLength;
    //aqui se activa un contador con la cantidad de letras que faltan para llenar el texto
    $('.counter').text(charactersLeft);
    //condicionales para desabilitar el boton post
    if(charactersLeft < 0){
        $('.btn').addClass('disabled');
    }
    else if(charactersLeft == 140){
        $('.btn').addClass('disabled');
    }
    else{
        $('.btn').removeClass('disabled');
    }
    });
};

$('.btn').addClass('disabled');
$(document).ready(main);
