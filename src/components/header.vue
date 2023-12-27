<template>
    <div id="app"> <!--Contenedor-->
      <header> <!-- Encabezado --> 
        <img class="logo-fenix-header" src="/img/logo.png" alt="Fenix" width="130" height="50">
        <nav> <!-- Sección de Navegación en un página web -->
          <a class="btn-white"> <router-link to="/home">Home</router-link>	</a>
          <a class="btn-white"> <router-link to="/cliente">Clientes FENIX</router-link> </a>
          <a class="btn-white"> <router-link to="/industria">Industrias y Planes</router-link></a>
          <a class="btn-white"> <router-link to="/estamos">Estamos Contigo</router-link></a>
        </nav>
        <div class="input-container">
          <input class="busqueda" type="text" placeholder="Búsqueda...">
        </div>
      </header>
    </div>
  </template>

<script>

</script>

<style>

*{
  margin: 0px;
  padding: 0px;
  border: 0px solid;
}


header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90px; 
  width: 100%;
  font-weight: bold;
  top: 0;
  z-index: 9999;
  /* border: 1px solid; */
}

.logo-fenix-header{
  margin-right: 50px;
}

/*Botones*/
a {
  background: transparent; /*fondo*/
  color: rgb(126, 126, 126);/*color de fuente*/
  border: 1px transparent; /*borde*/
  padding: 0px 8px; /*agrega pixeles en los cuatro lados*/
  font-family: 'Poppins', sans-serif; /*Fuente*/
  text-decoration: none;
}
 /*Para cambiar el color de los botones */
a:hover{
  color: red;
}

/*Cuadro de Busqueda*/
input[type="text"] {
  background-color: #dadada; /* Color de fondo del cuadro de búsqueda */
  color: #8a8989; /* Color del texto */
  border: none; /* Elimina el borde predeterminado */
  border-radius: 26px; /* Hace los bordes redondeados */
  padding: 8px 40px; /* Espaciado interno */
  text-align: right; /* Alinea el texto a la derecha */
  margin-left: 50px; /* Envia el campo a la izquierda */
  padding-left: 0px; /* Espacio para la imagen dentro del input */
  background-image: url('/img/lupa.png');
  background-size: 25px 25px; /* Tamaño de la imagen */
  background-position: calc(100% - 10px) center; /* Ajusta la posición de la imagen */
  background-repeat: no-repeat; /* Evita la repetición de la imagen */
  width: 80%; 
  font-family: 'Poppins', sans-serif;
  font-style: italic  ;
}

p{
  color: black;
}

</style>
