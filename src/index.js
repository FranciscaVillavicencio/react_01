import React from 'react';
import ReactDOM from 'react-dom/client';

//react Dom tiene el metodo render, el que recibe dos parametros: 1- lo que queremos mostrar 2- donde lo vamos a mostrar.

// lo que creamos aqui es una plantilla, que luego insertamos en el DOM de nuestra pagina. 
const nombre = 'Fran'
const sesion = true;
const pais = 'Chile';
const amigos = ['Gery', 'Nini', 'Pancho'];

const JSX = (
//OTRA FORMA DE UTILIZAR CONDICIONALES, ES CON UN OPERADOR TERNARIO. QUE EN ESTE CASO SE AGREGA DENTRO DE NUESTRO CODIGO JSX
<>
{sesion === true ? 
<> 
<h1 className= "titulo"> Hola {nombre}!</h1>
<p>al fin es viernes</p>
{pais && <p>Tu eres de {pais} </p>}
</> 
: <h1>No haz iniciado sesion</h1>}
<ul>
    {amigos.map((amigo, index) => <li key = {index}> {amigo}</li>
    )}
</ul>
</> 
);

/* 
// ESTA ES UNA FORMA DE UTILIZAR CONDICIONALES
const verificarSesion = (sesion) => {
if(sesion === true){
    return JSX;
}else{
    return <h1>No has iniciado sesion</h1>
}
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 verificarSesion(sesion)
); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 JSX
);

