var main = function(){
    //funcion que hace efecto al hacer click
    //la clase dropdown toggle se encuentra en la pestana more
    $('.dropdown-toggle').click(function() {   //utilizamos la clase dropdown menu y lo mostramos y desaparecemos usando .toggle()
    $('.dropdown-menu').toggle();   
    });
    //activamos el click con la clase arrow next
    $('.arrow-next').click(function() {
    //la var currentslide selecciona la diapositiva activa
    var currentSlide = $('.active-slide');
    //la var nextslide almacena la siguiente diapositiva
    var nextSlide = currentSlide.next();
    //almacenamos la clase active-dot a traves de la var currentDot
    var currentDot = $('.active-dot');
    //aqui utilizamos .next() con currentDot y lo almacenamos con var nextDot
    var nextDot = currentDot.next();
    //condicional que dice que si ya no hay mas diapositivas, reinicie con la primera
    if(nextSlide.length == 0) {
        nextSlide = $('.slide').first();
        nextDot = $('.dot').first();
    }
    //hacemos que currentslide desaparezca en 600 miliseg.
    currentSlide.fadeOut(600).removeClass('active-slide');
    //hacemos que nextslide aparezca en 600 miliseg.
    nextSlide.fadeIn(600).addClass('active-slide');
    //aqui quitamos el currentDot y lo cambiamos por nextDot, si el usuario cambia diapositiva
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
    });
    
    $('.arrow-prev').click(function(){
        var currentSlide = $('.active-slide');
        //utilizando .prev() podemos seleccionar la diapositiva anterior
        var prevSlide = currentSlide.prev();
        //aqui utilizamos .last si ya no hay mas imagenes previas, y hacemos que muestre la ultima
        
        var currentDot = $('.active-dot');
        //Aqui se selecciona el punto anterior utilizando .prev()
        var prevDot = currentDot.prev();
        //condicional que dice que sirve para regresar con la diapositiva y punto anterior
        if(prevSlide.length == 0){
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }
        //hacemos que currentslide desaparezca en 600 miliseg.
        currentSlide.fadeOut(600).removeClass('active-slide');
        //hacemos que currentslide aparezca en 600 miliseg.
        prevSlide.fadeIn(600).addClass('active-slide');
        //desaparecemos currentdot
        currentDot.removeClass('active-dot');
        //hacemos que aparezca prevdot
        prevDot.addClass('active-dot');
    });
};

$(document).ready(main);
