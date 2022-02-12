#### Cachipún JS. V0.1 ####

Este proyecto fue desarrollado en Julio de 2021.
Corresponde a un encargo de desarrollar una app de
priedra-papel-tijera o cachipún como se conoce en Chile.

Como es un encargo relativamente común en cada curso de programación
y siempre se desarrolla con solo los numeros aleatorios o
mensajes de consola, decidí darle una interfaz grafica a partir
de ilustraciones de stock de Vecteezy liberadas.

El computador genera numero aleatorio para cada uno de las 3 opciones y el usuario genera con un boton cada una de estas tres opciones. Los numeros se vinculan a animaciones prehechas en CSS y el JS modifica las propiedades del CSS lo que activa la animación. 

El conjunto debiera tener un número limitado de juegos pero no se desarrollo de forma satisfactoria en su momento, por lo que se enfocó en desarrollar la funcionalidad básica y que esta funcionara.

Funciono en las pruebas de uso pero despues de un cierto número de 
jugadas muy seguidas tendía a generar errores creo debido a demasiada
carga en memoria.
Creo sería una mejora usar CANVAS en html y no moverlas dentro de un div que es menos eficiente al no ser desarrollado específicamente
para estas tareas graficas.
