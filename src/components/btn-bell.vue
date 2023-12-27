!<template>

  <div>



<div data-v-7be99d7c="" class="dinamic-button-container" >
  <button data-v-7be99d7c="" class="dinamic-button hover-box" @click="toggleForm"   @mouseover="showMessageOn"
  @mouseout="showMessageOff">
    <svg data-v-7be99d7c="" class="svg-inline--fa fa-bell fa-shake button-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path class="" fill="currentColor" d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z">

      </path>
      
    </svg>
    <div data-v-7be99d7c="" class="notification-bubble">1 
    <span data-v-7be99d7c="" class="button-text">

      </span>
      

      </div>


    </button>
    <div
        v-show="showForm"
        data-v-7be99d7c=""
        class="popup-container active"
      >
      <div data-v-7be99d7c="" class="popup-form" >
        <form data-v-7be99d7c="" class="centered-form">
          <h2 data-v-7be99d7c="">Participa del próximo DEMO

          </h2>
          <div data-v-7be99d7c="" class="input-container">
            <input data-v-7be99d7c="" class="style-input" type="String" placeholder="Nombre Completo" required=""><svg data-v-7be99d7c="" class="svg-inline--fa fa-user input-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path class="" fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z">

            </path>
          </svg>
        </div>
        <div data-v-7be99d7c="" class="input-container">
          <input data-v-7be99d7c="" class="style-input" type="email" placeholder="Correo Electrónico" required="">
          <svg data-v-7be99d7c="" class="svg-inline--fa fa-envelope input-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path class="" fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z">

          </path>
        </svg>
      </div>
      <div data-v-7be99d7c="" class="input-container">
        <input data-v-7be99d7c="" class="style-input" type="String" placeholder="Número de celular" required="">
        <svg data-v-7be99d7c="" class="svg-inline--fa fa-phone input-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path class="" fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z">

          </path>
        </svg>
      </div>
      <div data-v-7be99d7c="" class="input-container">
        <input data-v-7be99d7c="" class="style-input" type="String" placeholder="Giro de Negocio" required="">
        <svg data-v-7be99d7c="" class="svg-inline--fa fa-shop input-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shop" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path class="" fill="currentColor" d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z">
            
          </path>
        </svg>
      </div>
      <div data-v-7be99d7c="" class="checkbox-container">
        <input data-v-7be99d7c="" type="checkbox" required="">
        <a data-v-7be99d7c="" href="https://webfenix.s3.amazonaws.com/brands/terminos_y_condiciones.pdf" target="_blank"> De acuerdo con los Términos y Condiciones

        </a>
      </div>
      <button data-v-7be99d7c="">Agendar una DEMO

      </button>
      <button data-v-7be99d7c="">Cancelar

      </button>
    </form>
  </div>
</div>
</div>

  </div>  
</template>

<script>
export default {
  data() {
    return {
      showForm: false,
      showMessage: false,

    };
  },
  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
      if (this.showForm) {
        document.addEventListener("click", this.handleClickOutside);
      } else {
        document.removeEventListener("click", this.handleClickOutside);
      }
    },
    handleClickOutside(event) {
      const button = this.$el.querySelector(".dinamic-button");
      const form = this.$el.querySelector(".popup-form");
      if (!button.contains(event.target) && !form.contains(event.target)) {
        this.showForm = false;
      }
    },
    showMessageOn() {
    this.showMessage = true;
  },
  showMessageOff() {
    this.showMessage = false;
  },
  },
};
</script>

<style>
.dinamic-button-container[data-v-7be99d7c] {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: fixed;
    bottom: 70px;
    right: 50px;
    z-index: 1;
    

  }
 
.dinamic-button[data-v-7be99d7c]:hover {
  width: 300px; /* Ajusta el ancho según tus preferencias */
}
  .dinamic-button[data-v-7be99d7c] {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 15px;
    font-size: 25px;
    background-color: #00337c;
    color: #fff;
    border: #00337c;
    border-radius: 10px;
    margin: 20px 0;
    cursor: pointer;
    transition: width .5s ease;
    width: 60px;
    height: 60px;
    z-index: 1;
   
}


.dinamic-button:hover ~ .message-container,
.message-container:hover {
  display: block;
}

.button-icon[data-v-7be99d7c] {
    margin-right: 4px;
    position: absolute;
}


.notification-bubble[data-v-7be99d7c] {
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -10px;
    right: -10px;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border: 2px solid #00337c;
    color: #00337c;
    border-radius: 50%;
    font-size: 12px;
    display: flex;
    z-index: 2;
}
.popup-container.active[data-v-7be99d7c] {
    display: flex;
    pointer-events: auto;
}
.popup-container[data-v-7be99d7c] {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 99;
    pointer-events: none;
}
.popup-form[data-v-7be99d7c] {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px #0000004d;
    pointer-events: auto;
    animation: popupAnimation-7be99d7c .3s ease;
    text-align: center;
}

.centered-form h2[data-v-7be99d7c] {
    font-size: 25px;
    color: #00337c;
    font-weight: 700;
}

.style-input[data-v-7be99d7c] {
    border: 2px solid#00337c;
    color: #848484;
    border-radius: 7px;
    padding: 15px 40px 15px 15px;
    margin: 5px;
    font-size: 15px;
    width: 100%;
}


.input-icon[data-v-7be99d7c] {
    position: absolute;
    right: 20px;
    color: #606060;
    pointer-events: none;
}




.input-container[data-v-7be99d7c] {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
}
.checkbox-container[data-v-7be99d7c] {
    display: flex;
    align-items: center;
    gap: 10px;
}
.centered-form button[data-v-7be99d7c] {
    border: 5px solid #00337c;
    border-radius: 7px;
    padding: 15px;
    width: 100%;
    color: #00337c;
    font-size: 20px;
    margin: 5px;
}
.message-container {
  position: fixed;
  bottom: 100px;
  right: 50px;
  background-color: #00337c;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  display: none;
  /* Añade estilos para el nuevo texto */
}


.message-container p {
  margin: 0; /* Elimina el margen por defecto del párrafo */
}


</style>