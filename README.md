# Cifrado César

## Índice

* [1. Introducción](#1-introducción)
* [2. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Introducción

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.
#
## 2. Aplicación web Cifrado César
## Definición del producto
### Usuarios - Objetivos y resolución de problemas
* Los principales usuarios de producto son todas aquellas personas que en algun momento necesiten cifrar algun texto. Que tengan conocimientos minimos en manejo de una pc y la web.
* Los usuarios tienen como objetivo cifrar mensajes y compartirlos con las personas que deseen.
* El producto resuelve su problematica ya que cumple con los objetivos que son cifrar y decifrar textos o mensajes.

### Interfaz de usuario (UI)



### Prototipo de baja fidelidad

![prototipo1](https://user-images.githubusercontent.com/20034242/106269072-00ea3780-61fa-11eb-8647-7be8936dc55f.jpeg)
#
Feedback: Se entendia de que iba la aplicacion web. 

### Segundo prototipo

![Prototipo2](https://user-images.githubusercontent.com/20034242/106269421-7b1abc00-61fa-11eb-856b-33c15fb555d4.png)
#
### Diseño final 
![final](https://user-images.githubusercontent.com/20034242/106275295-93430900-6203-11eb-9a8e-04fdae9f828c.jpeg)

## 3. Instrucciones para el uso

La aplicación web, consta de una sola pantalla, donde se puede visualizar el logo en la parte izquierda y en la parte derecha se puede visualizar la parte interactiva de la aplicación. 

### Como usar

Al lado derecho de la aplicación web, Se tiene un text area, donde el usuario debe ingresar el texto o mensaje que desee cifrar, debajo del text area podemos tenemos una caja de texto donde se debe colocar el número de desplazamientos que desee usar para realizar su cifrado y al lado el boton de cifrar, que al hacer click cifrará el mensaje ingresado por el usuario.

Luego se muetran dos cajas de texto, en el de la izquierda es donde se mostrara el mensaje cifrado por el usuario, al lado de esta caja de texto se muestra el botón decifrar, que tiene como funcionalidad decifrar el mensaje ya cifrado por el usuario,y a la derecha del mismo se muestra una caja de texto, donde aparecera el mensaje decifrado.

