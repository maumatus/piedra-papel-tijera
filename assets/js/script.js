//Numero de ejecuciones solicitadas a usuario. Por medio de prompt aunque sería mejor por interface.

var cantJg = 5;
var count = prompt("cuantos juegos quieres?");

//Boton-animacion Piedra

function funcionPiedra1() {

    var a = document.getElementById("piedra-user");

    a.style.animationName = "mov-piedra-user";
    
    a.style.display = "initial";
};

function funcionPiedra2() {

    setTimeout(function(){

    var a = document.getElementById("piedra-user");

    a.style.animationName = "none";

    a.style.display = "none";

    }, 1500); //este setTimeout hacer que segunda funcion comience 
};             //a funcionar cuando ya termino el 1,5s de funcionar la primera, 


//Boton-animacion Papel

function funcionPapel1() {

    var a = document.getElementById("papel-user");

    a.style.animationName = "mov-piedra-user"; 
    
    a.style.display = "initial";
};

function funcionPapel2() {

    setTimeout(function(){

    var a = document.getElementById("papel-user");

    a.style.animationName = "none";

    a.style.display = "none";

    }, 1500); 
}; 


//Boton-animacion Tijera

function funcionTijera1() {

    var a = document.getElementById("tijera-user");

    a.style.animationName = "mov-piedra-user"; 
    
    a.style.display = "initial";
};

function funcionTijera2() {

    setTimeout(function(){

    var a = document.getElementById("tijera-user");

    a.style.animationName = "none";

    a.style.display = "none";

    }, 1500); 
};  


/*----------------Aqui comienza la logica principal del Juego Cachipún-------------------*/


//Definicion de variables de eleccion piedra, papel o tijera. 

//Variables desde boton Html. Boton piedra = 0, boton papel = 1, boton tijera = 2.

var uPi = parseInt(document.getElementById("boton-piedra").value);

var uPa = parseInt(document.getElementById("boton-papel").value);

var uTi = parseInt(document.getElementById("boton-tijera").value);

//Variables desde funcion aleatoria. Tambien piedra = 0, papel = 1, tijera = 2.
//funcion que genera jugada, cada boton de usuario genera su contraparte de funcion aleatoria

//Ejecuta juego piedra

function funcionJugarPiedra() {
    
    let pc = Math.floor(Math.random() * 3);//Jugada aleatoria PC. Scope local.
    
    if (pc == "0") {
        
        var a = document.getElementById("piedra-pc");

        a.style.animationName = "mov-piedra-pc";
        
        a.style.display = "initial";
        
        //funcion interior PC, para volver a estado inicial de modificacion CSS
    

        setTimeout(function(){
        
            var a = document.getElementById("piedra-pc");
        
            a.style.animationName = "none";
        
            a.style.display = "none";
        
        }, 1500); //Retardo 1.5s
        

    } else if (pc == "1") {

            var a = document.getElementById("papel-pc");
    
            a.style.animationName = "mov-piedra-pc";
            
            a.style.display = "initial"; 

            //funcion interior PC, para volver a estado inicial de modificacion CSS
    

            setTimeout(function(){
        
                var a = document.getElementById("papel-pc");
            
                a.style.animationName = "none";
            
                a.style.display = "none";
            
            }, 1500); //Retardo 1.5s
             

    } else if (pc == "2") {

        var a = document.getElementById("tijera-pc");

        a.style.animationName = "mov-piedra-pc";
        
        a.style.display = "initial";

        //funcion interior PC, para volver a estado inicial de modificacion CSS
    

        setTimeout(function(){
        
            var a = document.getElementById("tijera-pc");
        
            a.style.animationName = "none";
        
            a.style.display = "none";
        
        }, 1500); //Retardo 1.5s

    };
    
    //Aqui log para ver comprobar logica de juego.

    console.log(uPi)

    console.log(pc)

    //aqui va respuesta para escribir en DOM el ganador, perdedor o empate. Estan los 3 casos posibles por objeto.

    //Aqui se integra el Do While requerido, una vez termine el counter dira un mensaje de fin del juego    

    do {

        count = count - 1;
    
        document.getElementById("num").innerHTML = count;


        if (uPi == pc) {

            document.getElementById("ganador-perdedor-empate").innerHTML = "<h2>Empate</h2>";
            
        } else  if( (uPi == 0) && (pc == 1) ){
            
            document.getElementById("ganador-perdedor-empate").innerHTML = "<h2>Perdiste</h2>";

        } else if (( (uPi == 0) && (pc == 2) )){

            document.getElementById("ganador-perdedor-empate").innerHTML = "<h2>Ganaste!</h2>";

        };

    } while (cantJg < 5);

    if(count == 0){
        document.getElementById("ganador-perdedor-empate").innerHTML = "<h2>Fin</h2>";
    }
};

//Ejecuta juego papel

function funcionJugarPapel() {
    
    let pc = Math.floor(Math.random() * 3);//Jugada aleatoria PC. Scope local.Variable interna sino no calculaba pseudo-azar.


    if (pc == "0") {
        
        var a = document.getElementById("piedra-pc");

        a.style.animationName = "mov-piedra-pc";
        
        a.style.display = "initial";
        
        //funcion interior PC, para volver a estado inicial de modificacion CSS
    

        setTimeout(function(){
        
            var a = document.getElementById("piedra-pc");
        
            a.style.animationName = "none";
        
            a.style.display = "none";
        
        }, 1500); //Retardo 1.5s
        

    } else if (pc == "1") {

            var a = document.getElementById("papel-pc");
    
            a.style.animationName = "mov-piedra-pc";
            
            a.style.display = "initial"; 

            //funcion interior PC, para volver a estado inicial de modificacion CSS
    

            setTimeout(function(){
        
                var a = document.getElementById("papel-pc");
            
                a.style.animationName = "none";
            
                a.style.display = "none";
            
            }, 1500); //Retardo 1.5s
             

    } else if (pc == "2") {

        var a = document.getElementById("tijera-pc");

        a.style.animationName = "mov-piedra-pc";
        
        a.style.display = "initial";

        //funcion interior PC, para volver a estado inicial de modificacion CSS
    

        setTimeout(function(){
        
            var a = document.getElementById("tijera-pc");
        
            a.style.animationName = "none";
        
            a.style.display = "none";
        
        }, 1500); //Retardo 1.5s

    }
//Estos log son para para comprobar funcionamiento de logica

    console.log(uPa)

    console.log(pc)

//Respuestas en DOM

do {

    count = count - 1;

    document.getElementById("num").innerHTML = count;


    if (uPa == pc) {

        document.getElementById("ganador-perdedor-empate").innerHTML = "<h2>Empate</h2>";
        
    } else  if( (uPa == 1) && (pc == 2) ){
        
        document.getElementById("ganador-perdedor-empate").innerHTML = "<h2>Perdiste</h2>";

    } else if (( (uPa == 1) && (pc == 0) )){

        document.getElementById("ganador-perdedor-empate").innerHTML = "<h2>Ganaste!</h2>";

    };

    } while (cantJg < 5);

    if(count == 0){
        document.getElementById("ganador-perdedor-empate").innerHTML = "<h2>Fin</h2>";
    }

};


//Ejecuta juego tijera por parte de usuario

function funcionJugarTijera() {
    
    let pc = Math.floor(Math.random() * 3);//Jugada aleatoria PC. Scope local.

//Estos 3 if, else if, conectan con la animacion correspondiente al resultado aleatorio.
    if (pc == "0") {
        
        var a = document.getElementById("piedra-pc");

        a.style.animationName = "mov-piedra-pc";
        
        a.style.display = "initial";
        
        //funcion interior PC, para volver a estado inicial de modificacion CSS
    

        setTimeout(function(){
        
            var a = document.getElementById("piedra-pc");
        
            a.style.animationName = "none";
        
            a.style.display = "none";
        
        }, 1500); //Retardo 1.5s
        

    } else if (pc == "1") {

            var a = document.getElementById("papel-pc");
    
            a.style.animationName = "mov-piedra-pc";
            
            a.style.display = "initial"; 

            //funcion interior PC, para volver a estado inicial de modificacion CSS
    

            setTimeout(function(){
        
                var a = document.getElementById("papel-pc");
            
                a.style.animationName = "none";
            
                a.style.display = "none";
            
            }, 1500); //Retardo 1.5s
             

    } else if (pc == "2") {

        var a = document.getElementById("tijera-pc");

        a.style.animationName = "mov-piedra-pc";
        
        a.style.display = "initial";

        //funcion interior PC, para volver a estado inicial de modificacion CSS
    

        setTimeout(function(){
        
            var a = document.getElementById("tijera-pc");
        
            a.style.animationName = "none";
        
            a.style.display = "none";
        
        }, 1500); //Retardo 1.5s

    }
    //estos log son para revisar funcionamiento de logica

    console.log(uTi)

    console.log(pc)

    //aqui va respuesta para escribir en DOM el ganador, perdedor o empate

    do {

        count = count - 1;
    
        document.getElementById("num").innerHTML = count;


    if (uTi == pc) {

        document.getElementById("ganador-perdedor-empate").innerHTML = "<h2>Empate</h2>";
        
    } else  if( (uTi == 2) && (pc == 0) ){
        
        document.getElementById("ganador-perdedor-empate").innerHTML = "<h2>Perdiste</h2>";

    } else if (( (uTi == 2) && (pc == 1) )){

        document.getElementById("ganador-perdedor-empate").innerHTML = "<h2>Ganaste!</h2>";

    };

    } while (cantJg < 5);

    if(count == 0){
        document.getElementById("ganador-perdedor-empate").innerHTML = "<h2>Fin</h2>";
    }


};

/*----Fin. Tiene problemas CSS por resolver y la logica Do While no corta proceso, sigue luego del fin del counter-----*/
//Es harto codigo JS, no planifique el Do While y no se como podría incluírlo dentro del loop. Aprendí que hay que planificar bien.
//A veces funciona bien, a veces tiene problemas, parece que es mucho codigo a ejecutar dentro de alguna memoria limitada del DOM.
//Sorry lo largo. Saludos Osman.

