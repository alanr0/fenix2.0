<template>
  <body>
    <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    :modules="modules"
    class="mySwiper">

    <swiper-slide>
      <div class="swiper-slide">
            <div class="textos">
                <h2>Dashboard</h2>
                    <p class="txt2">Usa <b>tableros de control</b>, información en tiempo real</p>
                        <ul class="listas">
                            <li>Comparte, crea y filtra tu información</li>
                            <li>Toma de decisiones inteligentes.</li>
                            <li>Obtén informes, colabora con departamentos y áreas importantes en tu negocio.</li>
                            <li>FENIX te ofrece distintos diseños de tableros, elije la visualización que mejor te permita entender y organizar tu información.</li>
                        </ul>
            </div>
              <img class="img-pc" src="/img_body/pc-1.png" alt="Pc1">
      </div>
      </swiper-slide>

      <swiper-slide>
      <div class="swiper-slide">
            <div class="textos">
                <h2>Comercial Contable</h2>
                    <p class="txt2">Módulos personalizados y escalables</p>
                        <ul class="listas">
                            <li>Comercial de Inventarios y Servicios, almacenes, bodegas y stok.</li>
                            <li>Seguimiento de clientes, historial, cobranza y cotizaciones.</li>
                            <li>Manejo de proveedores, reportes e historial.</li>
                            <li>Contabilidad, anexos, reportes y detalles.</li>
                        </ul>
            </div>
            <img class="img-pc" src="/img_body/pc-2.png" alt="Pc2">
        </div>
      </swiper-slide>

      <swiper-slide>
      <div class="swiper-slide">
            <div class="textos">
                <h2>TPV</h2>
                    <p class="txt2">Tú punto de Venta te permite obtener información valiosa</p>
                        <ul class="listas">
                            <li>Menú gráfico y dinámico.</li>
                            <li>Tesorería y cierre de caja.</li>
                            <li>Reporte de rotación de inventario.</li>
                            <li>Informe stock de inventario.</li>
                        </ul>
            </div>
            <img class="img-pc" src="/img_body/pc-3.png" alt="Pc3">
        </div>
      </swiper-slide>

      <swiper-slide>
      <div class="swiper-slide">
            <div class="textos">
                <h2>ZEUS MOBILE</h2>
                    <p class="txt2">Movilidad para optimizar tus cobros, rutas, visitas a clientes y pedidos.</p>
                        <ul class="listas">
                            <li>Registro de cobros y facturas desde la app.</li>
                            <li>Crea rutas y planifica visitas.</li>
                            <li>Visualización en tiempo real.</li>
                            <li>Autoriza facturas, pedidos e inventarios.</li>
                        </ul>
            </div>
                <img class="img-pc" src="/img_body/pc-4.png" alt="Pc4">
        </div>
      </swiper-slide>
    </swiper>

  <section class="column">
    <div class="column-left">
      <swiper
  :slidesPerView="3"
  :spaceBetween="0"
  :loop="true"
  :autoplay="{
    delay: 1000,
    disableOnInteraction: false,
  }"
  :navigation="false"
  :modules="modules"
  direction="vertical"
  class="mySecondSwiper"
>

    <swiper-slide>
      <div class="swiper-slide-vertical-ancho">
      <img class="imgvertical desaturate" src="/img_empresas/cepa.png" alt="">
    </div>
    </swiper-slide>

    <swiper-slide>
      <div class="swiper-slide-vertical-ancho">
      <img class="imgvertical desaturate" src="/img_empresas/fadelec.png" alt="">
    </div>
    </swiper-slide>

    <swiper-slide>
      <div class="swiper-slide-vertical"> 
      <img class="imgvertical desaturate" src="/img_empresas/induacero.png" alt="">
    </div>
    </swiper-slide>

    <swiper-slide>
      <div class="swiper-slide-vertical">
      <img class="imgvertical desaturate" src="/img_empresas/indufrance.png" alt="">
      </div>
    </swiper-slide>

    <swiper-slide>
      <div class="swiper-slide-vertical">
      <img class="imgvertical desaturate" src="/img_empresas/lonchis.png" alt="">
    </div>
    </swiper-slide>

    <swiper-slide>
      <div class="swiper-slide-vertical">
      <img class="imgvertical desaturate" src="/img_empresas/motorcicle.png" alt="">
    </div>
    </swiper-slide>

    <swiper-slide>
      <div class="swiper-slide-vertical">
      <img class="imgvertical desaturate" src="/img_empresas/ordeno.png" alt="">
    </div>
    </swiper-slide>

    <swiper-slide>
      <div class="swiper-slide-vertical">
      <img class="imgvertical desaturate" src="/img_empresas/paseo.png" alt="">
    </div>
    </swiper-slide>

    <swiper-slide>
      <div class="swiper-slide-vertical">
      <img class="imgvertical desaturate" src="/img_empresas/san-agustin.png" alt="">
    </div>
    </swiper-slide>

    <swiper-slide> 
      <div class="swiper-slide-vertical">
      <img class="imgvertical desaturate" src="/img_empresas/telalca.png" alt="">
    </div>
    </swiper-slide>
      </swiper>

      <div class="button-container-images">
        <button class="round-button animated-button">+</button>
      </div>

    </div>

    <div class="column-right">
      <div class="second-container"> 
        <h3 class="titulo">Estas grandes marcas forman parte de FENIX</h3>
        <div>
          <p class="second-p">
            Estamos contigo para gestionar tu negocio, nos diversificamos alrededor del país.
          </p>
          <div class="button-container-map">
            <button class="button-ecu-map">
              <img src="/img_empresas/ecu.png" alt="" class="img-ecu">
              <div class="rotation-square">
              </div>
            </button>
          </div>        
        </div>
      </div>
    </div>
  </section>

  <section class="container-title">
    <h1 class="title">Industrias y Planes</h1>
    <div class="container-cards">
      <div class="card card-1">
        <div>
          <h2>Manufactura e Importaciones</h2>
          <ul class="stats fa-ul">
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Costos de producción
            </li>
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Logística y guías de transporte
            </li>
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Control de lotes y vencimiento
            </li>
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Manejo de porveedores
            </li>
          </ul>
        </div>
        <div class="button-container">
          <button class="card-button column-left">
            <img class="imgbutton" src="/img_button/btn1.png" alt="">
          </button>
        </div>
      </div>
      <div class="card card-2">
        <div>
          <h2>Agroindustrias</h2>
          <ul class="stats fa-ul">
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Florícolas
            </li>
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Picking y Etiqueta
            </li>
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Logística y guías de transporte
            </li>
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Balance y reportes
            </li>
          </ul>
        </div>
        <div class="button-container">
          <button class="card-button column-right">
            <img class="imgbutton" src="/img_button/btn2.png" alt="">
          </button>
        </div>
      </div>
      <div class="card card-3">
        <div>
          <h2>Farmacias y laboratorios </h2>
          <ul class="stats fa-ul">
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Control de lotes y vencimiento
            </li>
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Almacenes, bodega y stock
            </li>
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Manejo de porveedores
            </li>
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Puntos de emisión y facturación
            </li>
          </ul>
        </div>
        <div class="button-container">
          <button class="card-button column-left">
            <img class="imgbutton" src="/img_button/btn3.png" alt="">
          </button>
        </div>
      </div>
      <div class="card card-4">
        <div>
          <h2>Pymes y Emprendimientos</h2>
          <ul class="stats fa-ul">
            <li>
              <svg class="svg-inline--fa fa-play fa-2xs" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path class="" fill="currentColor" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
              </svg>
              Facturación Electrónica
            </li>
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Inventario y almacén
            </li>
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Consulta de ruc e integración SRI
            </li>
            <li>
              <svg class="svg-inline--fa fa-shield fa-2xs fa-li" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 4px 0px;">
              <path class="" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
            </svg>
              Informe y reportes
            </li>
          </ul>
        </div>
        <div class="button-container">
          <button class="card-button column-right">
            <img class="imgbutton" src="/img_button/btn4.png" alt="">
          </button>
        </div>
      </div>
    </div>
  </section>
 
<section class="container-n4">
  <div class="titles-lideres">
    <h2 class="titles title-lider">Somos líderes en el mercado de software</h2>
      <p class="paragraph">Mas de 18 mil clientes en más de 17 provincias de Ecuador ¿Qué esperas     para ser parte de ellas?
      <strong>Te ayudamos a gestionar óptimamente tus procesos.</strong></p>
  </div>

    <div id="videoContainer" class="video-container" :class="{ 'show': isVideoModalOpen }">
      <button class="close-button" @click="closeVideoModal">&times;</button>
      <iframe width="560" height="315" :src="videoUrl" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="button-container-video" @click="openVideoModal">
      <button class="round-button">
        <svg class="svg-inline--fa fa-play fa-2xs" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path class="" fill="currentColor" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
        </svg>
      </button>
      <p class="title-video">VER VIDEO</p>
    </div>
    <div class="counter-wrapper" ref="counterWrapper">
    <div class="counter-grid">
		        <div class="counter-item">
		            <p class="counter-number" v-counter-animation="{ value: 3, showPlusK: false, showPlus: false }">0</p>
		            <p class="counter-label">Versiones</p>
		        </div>
		        <div class="counter-item">
		            <p class="counter-number" v-counter-animation="{ value: 18, showPlusK: false, showPlus: true }">0</p>
		            <p class="counter-label">Módulos</p>
		        </div>
		        <div class="counter-item">
		            <p class="counter-number" v-counter-animation="{ value: 100, showPlusK: false, showPlus: true }">0</p>
		            <p class="counter-label">Funcionalidades</p>
		        </div>
		        <div class="counter-item">
		            <p class="counter-number" v-counter-animation="{ value: 18, showPlusK: true }">0</p>
		            <p class="counter-label">Clientes</p>
		        </div>
		</div>
  </div>
</section>


<section class="cards-cmp">
  <div class="cards-cmp-container">
  <div class="card-column-left ">
    <h3>Contadores:</h3>
    <img src="/img_card-three/ct-1.svg" alt="icono-contadores">
  <p class="aliados">Somos tu aliado,más que un<br>software estamos contigo en<br>cada paso.</p>
  </div>
  <div class="card-column-right card-col-1 img-contadores" >
    
  <div class="title-col-right">
  <h4 class="txtright">¡Conviértete en un<br>asesor integral!</h4>
  </div>
<div class="list-card">
  <ul class="fa-ul">
  <li class="item-with-icon">
    <svg class="svg-inline--fa fa-shield fa-xs fa-li custom-icons-cont" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 6px 0px;">
      <path class="shieldcolor" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
    </svg> Facturación Electrónica 
  </li>
  <li class="item-with-icon">
    <svg class="svg-inline--fa fa-shield fa-xs fa-li custom-icons-cont" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 6px 0px;">
      <path class="shieldcolor" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"></path>
    </svg> Multi-Empresa, Multi-Usuario<br>y Multi-Bodega 
  </li>
  <li class="item-with-icon">
    <svg class="svg-inline--fa fa-shield fa-xs fa-li custom-icons-cont" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 6px 0px;">
      <path class="shieldcolor" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z">
        
      </path>
    </svg> SRI y Conciliación<br>Bancaria 
  </li>
  <li class="item-with-icon">
    <svg class="svg-inline--fa fa-shield fa-xs fa-li custom-icons-cont" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 6px 0px;">
      <path class="shieldcolor" fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z">
  
      </path>
    </svg> Reportes e Informes 
  </li>
</ul>

</div>
</div>
</div>

<div class="cards-cmp-container">
  <div class="card-column-left">
    <h3>Microempresa:</h3>
    <img src="/img_card-three/ct-2.svg" alt="icono-microempresas">
    <p>¡Automatiza cada proceso!<br>Compra e inventario, facturación, <br>clientes y logística.<br>Con el manejo de contabilidad y reportes.</p>
  </div>
  <div class="card-column-right card-col-2 img-micro" >
    <div class="title-col-right">
      <h4 class="txtright">Optimiza la<br>gestión de tu<br>esmpresa o negocio!</h4>
    </div>
    <div class="list-card">
  <ul class="fa-ul2">
    <li class="item-with-icon">
      <a href="/microenterprises" class="btn-link">
        <svg class="svg-inline--fa fa-circle-plus fa-lg fa-li custom-icons" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path class="" fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
        </svg> FENIX Punto de Venta 
      </a>
      <button class="btn-action"></button>
    </li>
    <li class="item-with-icon">
      <a href="/commercial-accounting" class="btn-link">
        <svg class="svg-inline--fa fa-circle-plus fa-lg fa-li custom-icons" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path class="" fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
        </svg> Comercial Contable 
      </a>
      <button class="btn-action"></button>
    </li>
    <!-- Resto de los elementos li con la clase común -->
    <li class="item-with-icon">
      <a href="/inventories-warehouses" class="btn-link">
        <svg class="svg-inline--fa fa-circle-plus fa-lg fa-li custom-icons" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path class="" fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
        </svg> Inventarios y Almacenes 
      </a>
      <button class="btn-action"></button>
    </li>
    <!-- Agrega el resto de los elementos li aquí -->
    <li class="item-with-icon">
      <a href="/inventories-warehouses" class="btn-link">
        <svg class="svg-inline--fa fa-circle-plus fa-lg fa-li custom-icons" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path class="" fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
        </svg> Nómina
      </a>
      <button class="btn-action"></button>
    </li>
    <li class="item-with-icon">
      <a href="/inventories-warehouses" class="btn-link">
        <svg class="svg-inline--fa fa-circle-plus fa-lg fa-li custom-icons" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path class="" fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
        </svg> Zeus Mobile
      </a>
      <button class="btn-action"></button>
    </li>
    <li class="item-with-icon">
      <a href="/inventories-warehouses" class="btn-link">
        <svg class="svg-inline--fa fa-circle-plus fa-lg fa-li custom-icons" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path class="" fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
        </svg> Ventas Online
      </a>
      <button class="btn-action"></button>
    </li>
  </ul>
</div>

  </div>
</div>
<div class="cards-cmp-container">
  <div class="card-column-left">
    <h3>Pymes e Industria:</h3>
    <img src="/img_card-three/ct-3.svg" alt="icono-pymes-e-industrias">
    <p>Soluciones 100% parametrizables<br>a las necesidades de tu<br>empresa.</p>
  </div>
  <div class="card-column-right card-col-3 img-pymes" >
    <div class="title-col-right">
      <h4 class="txtright">¡Unifica y<br>automatiza<br>procesos!</h4 >
    </div>
    <div class="list-card">
      <ul class="fa-ul">
        <li>
        <a href="/dashboard" class="btn-link">
        <svg class="svg-inline--fa fa-circle-plus fa-lg fa-li custom-icons" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path class="" fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
        </svg> Tableros Dashboard 
        </a>
    </li>
    <li>
      <a href="/importaciones" class="btn-link">
        <svg class="svg-inline--fa fa-circle-plus fa-lg fa-li custom-icons" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path class="" fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path>
        </svg> Importaciones
        </a>
    </li>
    <li>
      <svg class="svg-inline--fa fa-circle-plus fa-lg fa-li custom-icons" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 2px 0px;">
        <path class="" fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z">

        </path>
      </svg> Logística y Fuerza de Ventas </li>
      <li>
        <svg class="svg-inline--fa fa-circle-plus fa-lg fa-li custom-icons" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 2px 0px;">
          <path class="" fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path></svg> Costos de Producción </li>
          <li>
            <svg class="svg-inline--fa fa-circle-plus fa-lg fa-li custom-icons" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="padding: 2px 0px;">
              <path class="" fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z">

              </path>
            </svg> Lotes de Caducidad </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

<section class="container-seccion-moreview">
  <div class="cards-container">
    <h2 class="titles" style="">Más que un software, estamos contigo.</h2>
    <p class="text-parraf">Crecemos junto a ti y te acompañamos en cada paso...</p>
    <div class="cards-row">
      <div class="cards-item red">
        <h3 class="red">FENIX Club</h3>
        <h4>Refiere y gana</h4>
        <p class="cards-parraf red" style="margin-bottom:13px;">La red para contadores y <br> emprendedores que te brinda <br> premios, puntos y productos.</p>
        <a href="#" class="view-plus-button-red red">VER MÁS</a>
      </div>
      <div class="cards-item blue">
        <h3 class="blue">iContable</h3>
        <h4>Revista Contable</h4>
        <p class="cards-parraf blue" style="margin-bottom:40px;">¿Quieres suscribirte o compartir<br> con nosotros tus capacitaciones?</p>
        <a href="https://www.facebook.com/icontable" class="view-plus-button blue">VER MÁS</a>
      </div>
      <div class="cards-item red">
        <h3 class="red">Capacitaciones</h3>
        <h4>Aprende con nosotros</h4>
        <p class="cards-parraf red" style="margin-bottom:40px;">Contable, tributario,gerencias<br> empresarial alrededor del país</p>
        <a href="https://fenixcorp.net/ltgacap/" class="view-plus-button-red red">VER MÁS</a>
      </div>
    </div>
  </div>
</section>

<section class="container-seccion-3" data-v-a9c6a129="">
  <div class="alert-container" data-v-a9c6a129="">
    <div class="alert-column1 style-column" data-v-a9c6a129="">
      <h1 class="title-alert" data-v-a9c6a129="">Alerta</h1>
      <p style="color:#606060;font-family:'Poppins', sans-serif;" data-v-a9c6a129="">Estimados clientes y socios, FENIX CORP. informa que únicamente se comunica a través de sus canales electrónicos oficiales dominios, siendo los principales:</p><br data-v-a9c6a129="">
      <p style="color:#1d1d1b;font-family:'Poppins', sans-serif;" data-v-a9c6a129="">@fenixcorpecuador | @FenixcorpEcuador | fenixcorp.net | fenixcorp.fenixerp.com</p><br data-v-a9c6a129="">
      <p style="color:#1d1d1b;font-weight:bold;font-family:'Poppins', sans-serif;" data-v-a9c6a129="">Cualquier intento de contacto y/o comunicación que involucre un dominio diferente puede ser considerado inadecuado y/o un intento de fraude.</p>
    </div>
    <div class="alert-column2" data-v-a9c6a129="">
      <p class="titles-menu1" data-v-a9c6a129="">WEBSIDE FENIX</p>
      <div class="menu-container" data-v-a9c6a129="">
        <div data-v-a9c6a129="">
          <button class="titles-menu" data-v-a9c6a129="">FENIX CLUB</button>
          <button class="titles-menu" data-v-a9c6a129="">iContable</button>
          <button class="titles-menu" data-v-a9c6a129="">Capacitaciones</button>
        </div>
        <div data-v-a9c6a129="">
          <button class="titles-menu2" style="font-weight:lighter;" data-v-a9c6a129="">Home</button>
          <button class="titles-menu2" style="font-weight:lighter;" data-v-a9c6a129="">Clientes</button>
        </div>
        <div data-v-a9c6a129="">
          <button class="titles-menu2" style="font-weight:lighter;" data-v-a9c6a129="">Industrias y Planes</button>
          <button class="titles-menu2" style="font-weight:lighter;" data-v-a9c6a129="">Más que un software</button>
        </div>
      </div>
      <a href="https://webfenix.s3.amazonaws.com/brands/terminos_y_condiciones.pdf" target="_blank" class="terms-conditions" data-v-a9c6a129="">Términos y condiciones * Políticas de privacidad * Políticas de cookies * Definiciones de cookies *</a>
    </div>
  </div>
</section>

<section class="container-seccion-3" data-v-a9c6a129="">
  <div class="contacts-container" data-v-a9c6a129="">
    <div class="contacts-columns" data-v-a9c6a129="">
      <h4 data-v-a9c6a129="">Contáctanos</h4>
      <h4 data-v-a9c6a129="">Matriz Quito</h4>
      <p class="pultimo" data-v-a9c6a129="">PBX: 03 3 730 500</p>
      <p class="pultimo" data-v-a9c6a129="">Calle Japón y Alfonso Pereira, Edif. ZEIGEN, Oficina 515</p>
      <h4 data-v-a9c6a129="">Fábrica de Software y Sucursal Latacunga</h4>
      <p class="pultimo" data-v-a9c6a129="">+593 99851 4801</p>
      <p class="pultimo" data-v-a9c6a129="">Av. Unidad Nacional y Gabriela Mistral Edif. FENIX</p>
      <h4 data-v-a9c6a129="">Sucursal 1 (Quito)</h4>
      <p class="pultimo" data-v-a9c6a129="">02 390 9282</p>
      <p class="pultimo" data-v-a9c6a129="">+593 98 265 6056</p>
      <h4 data-v-a9c6a129="">Sucursal 2 (Quito)</h4>
      <p class="pultimo" data-v-a9c6a129="">02 604 0226</p>
      <p class="pultimo" data-v-a9c6a129="">+593 98 801 5382</p>
    </div>
    <div class="contacts-columns" data-v-a9c6a129="">
      <h4 data-v-a9c6a129="">Sucursal 3 (Quito)</h4>
      <p class="pultimo" data-v-a9c6a129="">+593 98 445 0505 </p>
      <h4 data-v-a9c6a129="">Sucursal 4 (Santo Domingo)</h4>
      <p class="pultimo" data-v-a9c6a129="">02 2 711 555</p>
      <p class="pultimo" data-v-a9c6a129="">+593 99 843 3286</p>
      <h4 data-v-a9c6a129="">Sucursal 5 (Manta)</h4>
      <p class="pultimo" data-v-a9c6a129="">+593 99 843 3286</p>
      <p class="pultimo" data-v-a9c6a129="">+593 98 306 2877</p>
      <h4 data-v-a9c6a129="">Sucursal 6 (El Coca)</h4>
      <p class="pultimo" data-v-a9c6a129="">+593 99 335 0091</p>
      <h4 data-v-a9c6a129="">Sucursal 7 (Cuenca)</h4>
      <p class="pultimo" data-v-a9c6a129=""> +593 96 988 2921</p>
    </div>
    <div class="contacts-columns" data-v-a9c6a129="">
      <h4 data-v-a9c6a129="">Atención al Cliente a nivel Nacional</h4>
      <p class="pultimo" data-v-a9c6a129="">+593 99 851 4801</p>
      <h4 data-v-a9c6a129="">Soporte Técnico</h4>
      <p class="pultimo" data-v-a9c6a129="">+593 98 465 8116</p>
      <h4 data-v-a9c6a129="">Presencia Internacional</h4>
      <h4 data-v-a9c6a129="">Perú - Lima</h4>
      <p class="pultimo" data-v-a9c6a129="">+51 940 637 220</p>
      <p class="pultimo" data-v-a9c6a129="">Calle Independencia 106, Piso 10 Miraflores</p>
      <h4 data-v-a9c6a129="">Colombia - Barranquilla</h4>
      <p class="pultimo" data-v-a9c6a129="">+57 322 3246708 - +57 314 3804602</p>
      <p class="pultimo" data-v-a9c6a129="">Cra. 41 # 73-48, Piso 4 Delicia Real</p>
    </div>
  </div>
</section>


</body>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    'counter-animation': {
      mounted(el, binding) {
        const { value, showPlusK, showPlus } = binding.value;
        let currentValue = 0;
        const increment = value / 40;

        function updateCounter() {
          currentValue += increment;
          el.innerText = showPlusK ? `+${Math.round(currentValue)}Mil` : showPlus ? `+${Math.round(currentValue)}` : Math.round(currentValue);

          if (currentValue >= value) {
            el.innerText = showPlusK ? `+${value}Mil` : showPlus ? `+${value}` : value;
            clearInterval(interval);
          }
        }

        const interval = setInterval(updateCounter, 30);
      },
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const counterWrapper = this.$refs.counterWrapper;
      if (counterWrapper) {
        const rect = counterWrapper.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          this.counterValues.forEach((counter, index) => {
            const counterItem = this.$el.querySelectorAll(".counter-number")[index];
            counterItem.innerText = '0';
          });
          setTimeout(() => {
            this.activateCounters();
          }, 100);
          window.removeEventListener("scroll", this.handleScroll);
        }
      }
    },
    activateCounters() {
      const counterItems = this.$el.querySelectorAll(".counter-number");
      counterItems.forEach((counterItem, index) => {
        this.updateCounter(counterItem, index);
      });
    },
    updateCounter(el, index) {
      const { value, showPlusK, showPlus } = this.counterValues[index];
      let currentValue = 0;
      const increment = value / 40;

      function updateCounter() {
        currentValue += increment;
        el.innerText = showPlusK ? `+${Math.round(currentValue)}Mil` : showPlus ? `+${Math.round(currentValue)}` : Math.round(currentValue);

        if (currentValue >= value) {
          el.innerText = showPlusK ? `+${value}Mil` : showPlus ? `+${value}` : value;
        }
      }

      setTimeout(() => {
        const interval = setInterval(updateCounter, 60);
      }, index * 300);
    },
    openVideoModal() {
      this.videoUrl = 'https://www.youtube.com/embed/mKdvgNnHvPk';

      const videoContainer = document.getElementById('videoContainer');
      videoContainer.style.display = 'block';
    },

    closeVideoModal() {
      const videoContainer = document.getElementById('videoContainer');
      videoContainer.style.display = 'none';
      this.videoUrl = ''; 
    },
  },
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      counterValues: [
        { value: 3, showPlusK: false, showPlus: false },
        { value: 18, showPlusK: false, showPlus: true },
        { value: 100, showPlusK: false, showPlus: true },
        { value: 18, showPlusK: true },
      ],
      videoUrl: '', // Inicialmente el enlace del video está vacío
    };
  },
};
</script>

<style>


 /* 1 */
.swiper {
  width: 95%;
}

.swiper-slide {
  display: flex;
}

.swiper-slide img {
  width: 650px;
  height: 500px;
}

.swiper-pagination {
--swiper-pagination-color: #f40043; 
--swiper-pagination-bullet-size: 16px;
--swiper-pagination-bullet-opacity: 1;
--swiper-pagination-bullet-horizontal-gap: 4px;
}

.textos {
color: #00337c;
font-family: 'Poppins', sans-serif;
flex: 1;
margin-top: -10px;   
margin-right: 0px;
margin-left: 70px;
}

.textos h2 {
font-family: 'Poppins', sans-serif;
font-size: 45px;
margin-top: 90px;
}

.textos .txt2 {
font-family: 'Poppins', sans-serif;
color: #00337c;
font-size: 28px;
margin-top: 0px;
}

.listas {
margin-top: 90px;
font-size: 15px;
list-style-type: disc;
padding-left: 20px;
}

/* 2 */

.column {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh; /* Altura completa de la ventana */
  margin-top: 200px;
  margin-bottom: 1px; 
}

.column-left {  
  flex: 1;
  max-height: calc(100% - 1px);
  display: flex;
  flex-direction: column;
}

.swiper-slide-vertical {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 155px;
}

.swiper-slide-vertical-ancho img{
  margin-left: 155px;
  width: 200px;
  height: 180px;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
  
} 

.swiper-slide-vertical img {  
  width: 200px;
  height: 120px;
  filter: grayscale(100%);
  transition: filter 0.5s ease; /* Agrega una transición suave para el efecto */
}

.swiper-slide-active img.desaturate {
  filter: grayscale(0%);
}


.round-button:before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background-color: #f40043e6;
    border-radius: 50%;
    animation: ripple 1.5s infinite;
    opacity: 1;
    transform: scale(0);
    transition: opacity .3s ease,transform .3s ease;
    z-index: -1;
}

.round-button{
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: none;
    color: #f40043;
    font-weight: 700;
    font-size: 30px;
    border: 6px solid #f40043;
    cursor: pointer;
    overflow: visible;
    z-index: 1;
    margin-left: 250px;
}

  @keyframes ripple {
    0% {
    transform: scale(.5);
    opacity: .4;
  }

  100% {
    transform: scale(1.1);
    opacity: 0;
  }
}


.column-right {  
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 235px;

}

.second-container{  
  font-family: 'Poppins', sans-serif;

}

h3{
  color: #f40043;
  font-size: 75px;
  line-height: 1.25;
  margin-top: -8px;
  margin-bottom: 100px; /* Agrega un margen inferior */
}

.second-p{
  color: #00337c;
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  text-align: center;
  width: 50%;
}

.button-container-map{
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: right;
    position: relative;
    margin-top: -250px;
}

.button-ecu-map {
    position: relative;
    width: 300px;
    height: 300px;
    border: 2px dotted #1c82ad;
    border-radius: 50%;
    background-color: transparent;
    overflow: visible;
    z-index: 1;
}

/* Rotación al rededor de la imagen ecuador */
.rotation-square {
    position: absolute;
    width: 7px;
    height: 20px;
    background-color: #1c82ad;
    transform-origin: center bottom;
    animation: rotate 7s linear infinite;
    top: 128px;
    left: 145px;
}

@keyframes rotate{
0% {
    transform: rotate(0) translate(-145px);
}
100% {
    transform: rotate(360deg) translate(-145px);
}
}

.img-ecu{
  width: 250px;
  height: 250px;
  padding: 25px;
}

/* 3 */

.title {
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: 57px;
    margin: 60px 0;
    font-size: 75px;
    font-weight: 700;
    text-align: center;
    color: #00337c;
}

.container-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    height: auto;
    font-family: 'Poppins', sans-serif;
}

.card h2 {
    font-size: 28px;
    color: #00337c;
    font-weight: 600;
    padding-left: 78px;
}

.card ul li {
    font-size: 18px;
    color: #00337c;
    line-height: 25px;
    margin-left: 90px;
}

.card ul {
    list-style: none;
    padding-left: 0;
}

.card ul li svg {
    width: 11px; /* Ajusta el ancho del icono */
    height: 11px; /* Ajusta el alto del icono */
    color: #f40043;
}

.card-1 {
    border-radius: 0 65px 0 0;
    box-shadow: 5px 5px 5px #0000004d;
}

.card-2 {
    border-radius: 65px 0 0;
    box-shadow: -5px 5px 5px #0000004d;
    margin-left: 93px;
    
}
.card-3 {
    border-radius: 0 0 65px;
    box-shadow: 5px 5px 5px #0000004d;
}
.card-4 {
    border-radius: 0 0 0 65px;
    box-shadow: -5px 5px 5px #0000004d;
    margin-left: 93px;

}

.card {
    display: grid;
    align-items: center;
    width: 80%;
    height: auto;
    padding: 50px 20px 50px 20px;
    background-color: #f5f5f5;
}

.card:hover {
  background-color: #d6d6d6;
}


.button-container{
  position: relative;
}

.column-left{
  float: right;
  margin: -125px -75px 0 0;
}


.column-right {
    float: left;
    margin: -125px 0 0 -65px;
}

.card-button {
  cursor: pointer;
  border: 10px solid #f40043;
  border-radius: 100%;
  width: 120px;
  height: 120px;
  z-index: 1;
  overflow: visible;
  margin-left: -75px;
  margin-right: -75px;
  position: relative;
}

.card-button::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background-color: #f40043e6;
  border-radius: 50%;
  opacity: 1;
  transform: scale(0);
  transition: opacity .3s ease, transform .3s ease;
  z-index: -1;
}

.card-button:hover::before {
  animation: ripple 1.5s infinite;
}

.card-button img {
  width: 65px;
  height: 65px;
  margin-left: 15%;
  margin-top: 15%; 
}

@keyframes ripple {
  0% {
    transform: scale(.5);
    opacity: .4;
  }
  100% {
    transform: scale(1.1);
    opacity: 0;
  }
}

 /* 4 */

 .container-n4 {
    margin-top: 100px;
    margin-bottom: 110px;
    display: grid;
    padding: 20px;
    line-height: 30px;
    align-items: center;
    justify-content: center;
}

.titles-lideres {
    display: flex;
    flex-direction: column;
    margin: 0 120px;
}

.titles {
    width: 100%;
    height: auto;
    color: #f40043;
    font-family: 'Poppins', sans-serif;
}

.title-lider {
    text-align: center;
    font-size: 45px;
}

.paragraph {
    width: 100%;
    font-size: 25px;
    color: #00337c;
    text-align: center;
    line-height: 40px;
    font-family: 'Poppins', sans-serif;
}

.title-video {
    font-size: 24px;
    font-weight: bolder;
    color: #f40043;
    padding-left: 15px;
    font-family: 'Poppins', sans-serif;
}


.counter-wrapper {
    max-width: 100%;
    margin: 0 auto;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 5px 5px 10px #0000001a;
}

.counter-grid{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 10px;
    
}


.counter-item{
    padding: 20px;

    text-align: center;
    
}

.counter-number {
    font-size: 65px;
    font-weight: 700px;
    color: #00337c;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    line-height: 100px;
    font-weight: bolder;
}
.counter-label {
    font-size: 30px;
    color: #00337c;
    margin: 5px;
    font-family: 'Poppins', sans-serif;

}


.video-container {
  display: none;
  position: fixed;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 100%;
}

.video-container iframe {
  width: 740px; 
  height: 410px;
  border-radius: 40px; 
  border: 1px solid;
}

.video-container.show {
  display: block;
}

.close-button {
  position: fixed;
  top: 42.3%;
  left: 60.1%;
  color: rgb(0, 0, 0);
  font-size: 20px;
  cursor: pointer;
  background-color: #f40043;
  height: 25px;
  width: 30px;
  border-radius: 20%;
}

.close-button:hover{
  background-color: #a3a1a1;

}

.button-container-video {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    margin-right: 300px;
    
}

.fa-2xs {
    font-size: 0.625em;
    line-height: 0.1em;
    vertical-align: 0.225em;
}

.svg-inline--fa {
    display: var(--fa-display, inline-block);
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
}




.cards-cmp-container {
    width: 75%;
    height: 350px;
    background-color: #f3f3f3;
    border-radius: 10px 25px 25px 10px;
    display: grid;
    grid-template-columns: .7fr 1.3fr;
    margin: 60px;
    box-shadow: 0 4px 6px #00000080;
}

.card-column-left {
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;
}
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.card-column-left h3 {
    color: #00337c;
    font-size: 32px;
    font-family: 'Poppins', sans-serif;
    margin-bottom: 10px;
}
.card-column-left p {
  font-family: 'Poppins', sans-serif;
    color: #00337c;
    line-height: 15px;
}
.title-col-right {
    margin-left: 120px;
    font-family: Poppins,sans-serif;
    font-size: 32px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}


/* tres  */






.btn-link {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.circle-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.btn-link svg[data-icon="circle-plus"] {
  border: 2px solid #f40043;
  border-radius: 50%;
  color: white;
  fill: red;
  transition: opacity 0.1s ease-in-out;
}

.btn-link:hover svg[data-icon="circle-plus"] {
  opacity: 0;
  animation: appearDisappear 1s infinite;
}

@keyframes appearDisappear {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.btn-link:hover {
  overflow: visible;
}






.cards-cmp {
    max-width: 100%;
    width: 100%;
    margin: 70px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}


.cards-cmp-container {
    width: 75%;
    height: 350px;
    background-color: #f3f3f3;
    border-radius: 10px 25px 25px 10px;
    display: grid;
    grid-template-columns: .7fr 1.3fr;
    margin: 60px;
    box-shadow: 0 4px 6px #00000080;
    
    
}

.card-column-left {
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    align-items: center;   
}

.card-column-right {
    position: relative;
}

.card-column-right {
    position: relative;
    border-radius: 0 25px 25px 0;
    opacity: .999;
    display: grid;
    grid-template-columns: 1fr 1fr; 
    padding: 0;
    overflow: hidden;
}

.card-column-left {
    display: flex;
    flex-direction: column;
    padding: 20px;
    text-align: center;
    align-items: center;
    justify-content: center;

}
.card-column-right {

    position: relative;
    border-radius: 0 25px 25px 0;
    opacity: .999;
    display: grid;
    padding: 0;
    overflow: hidden;

}
.shieldcolor{
  color: #f40043; 
}
.fa-ul {
  font-family: 'Poppins', sans-serif;
  color: white;
  font-size: 17px;
  font-weight: 700;
  padding: 5px 0;
  list-style: none; 
  margin-top: 80px;
}

.fa-ul li.item-with-icon {
  position: relative;
  display: flex;
  margin-bottom: 10px; /* Ajustar según sea necesario */
  margin-right: -290px; /* Ajustar según sea necesario */
}

.fa-ul li.item-with-icon svg {
  margin-right: 10px; /* Ajustar según sea necesario */
}

.txtright {
  text-align: center; /* Centra el texto */
  margin-left: -120px;
}

.card-column-left:hover{
  background-color: rgba(201, 199, 199, 0.8); /* Fondo gris con opacidad al pasar el cursor */


}
.fa-ul2 .item-with-icon a {
    background-color: transparent;
    color:white;
}

.item-with-icon {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 10px;
  background: none; /* Elimina cualquier fondo */
}

.item-with-icon svg {
  margin-right: 10px; /* Ajusta según sea necesario */
}
.fa-ul2{
  margin-top: 110px;
}
.btn-action {
  margin-left: auto;
  border: none;
  background: none;
  padding: 0;
  font-size: inherit;
  cursor: pointer;
  color: #007bff; /* Cambia el color del texto del botón según sea necesario */
}

.img-contadores{
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-image: url('/img_card-three/contadores.png');
            background-size: cover;
            background-position: center;
}

.img-micro{
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-image: url('/img_card-three/opti.png');
            background-size: cover;
            background-position: center;
}

.img-pymes{
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            background-image: url('/img_card-three/pymes.png');
            background-size: cover;
            background-position: center;
}

.container-seccion-moreview {
  margin-bottom: 400px;
    display: flex;
    width: 100%;
}

.cards-container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 80px;
    border-radius: 30px;
    background-color: #00337c;
    overflow: visible;
    height: auto;
    z-index: 1;
}

.cards-container h2 {
    text-align: center;
    color: #fff;
    font-size: 45px;
}



.text-parraf {
  font-family: 'Poppins', sans-serif;
    width: 100%;
    font-size: 25px;
    color: #fff;
    text-align: center;
}

.cards-row {
  font-family: 'Poppins', sans-serif;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-content: center;
    grid-gap: 15px;
    margin: 0;
}

.red{
  color: #f40043;
}

.cards-container h3 {
    font-size: 38px;

}

.cards-container h4 {
  margin-top: -100px;
    font-size: 25px;
    font-weight: lighter;
}
.cards-parraf {
    font-size: 18px;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

.cards-container a {
    border-radius: 15px;
    font-size: 20px;
    font-weight: 700;
    padding: 5px 15px;
    margin: 30px 0;
    background-color: transparent;
    text-decoration: none;
}


.view-plus-button-red {
    border: 4px solid;
    cursor: pointer;
}
.view-plus-button-red:hover {
  background-color: #f40043;
  color: white;
  border: 4px solid #f40043;
}

.cards-item {
    max-width: 320px;
    height: 260px;
    padding: 20px;
    text-align: center;
    background-color: #fff;
    box-shadow: 5px 5px 10px #0000001a;
    border-radius: 10px;
    margin: 30px 0 -250px;
}

.blue {
    color: #00337c;
}


.view-plus-button:hover {
  background-color: #00337c;
  color: white;
  border: 4px solid #00337c;
}
.view-plus-button {
    border: 4px solid;
    cursor: pointer;
}


/* ultimo */

.alert-container[data-v-a9c6a129] {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.style-column[data-v-a9c6a129] {
  
    background-color: #f5f5f5;
    border-radius: 25px;
    box-shadow: 5px 5px 10px #0000001a;
}

.alert-column1[data-v-a9c6a129] {
    display: grid;
    padding: 20px;
}

.title-alert[data-v-a9c6a129] {
  font-family: 'Poppins', sans-serif;
    width: 100%;
    font-size: 75px;
    font-weight: 700;
    letter-spacing: 2px;
    color: #00337c;
}

.alert-column2[data-v-a9c6a129] {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 20px;
}

.titles-menu1[data-v-a9c6a129] {
  font-family: 'Poppins', sans-serif;
    color: #606060;
    font-weight: 700;
    font-size: 20px;
    padding: 15px 0;
}

.menu-container[data-v-a9c6a129] {
    display: grid;
    grid-template-columns: 1fr .5fr 1.5fr;
    grid-gap: 20px;
    margin: 0 auto;
    color: #606060;
}

.titles-menu[data-v-a9c6a129] {
  font-family: 'Poppins', sans-serif;
    color: #606060;
    font-weight: 700;
    font-size: 18px;
    padding: 5px 0;
    border: none;
    background-color: #fff;
}

.titles-menu2[data-v-a9c6a129] {
  font-family: 'Poppins', sans-serif;
    color: #606060;
    font-weight: lighter;
    font-size: 20px;
    padding: 3px 0;
    border: none;
    background-color: transparent;
}

.terms-conditions[data-v-a9c6a129] {
    padding: 25px 0;
    color: #606060;
    text-decoration: none;
    cursor: pointer;
}

/* ultimo ultimo */

.contacts-container[data-v-a9c6a129] {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
}

.contacts-columns[data-v-a9c6a129] {
    padding: 15px;
}

.contacts-container h4[data-v-a9c6a129] {
    font-family: 'Poppins', sans-serif;
    color: #606060;
    font-size: 16px;
    font-weight: 700;
    padding: 0px;
}

.contacts-container h2[data-v-a9c6a129], h3[data-v-a9c6a129], p[data-v-a9c6a129] {
  font-family: 'Poppins', sans-serif;
    color: #606060;
    padding: 0px;
}

.contacts-container p[data-v-a9c6a129] {
  font-family: 'Poppins', sans-serif;
    font-size: 14px;
    padding: 0px;
}


</style>