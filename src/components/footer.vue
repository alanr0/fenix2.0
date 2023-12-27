<template>
    <footer>
        <div class="centered">
            <img class="logo-fenix-footer" src="/img/logof.png" alt="Fenix-Footer" width="150" height="65"> 
            <p style="font-size: 14px;">2023 FENIX SISTEMA CONTABLE * Todos los derechos reservados*</p>
            <img class="logo-redes-footer" src="/img/fcb.png" alt="Facebook" width="25" height="25"> 
            <img class="logo-redes-footer" src="/img/yutu.png" alt="Youtube" width="25" height="25"> 
            <img class="logo-redes-footer" src="/img/lig.png" alt="Instagram" width="25" height="25"> 
        </div>
    </footer>
</template>

<style>

footer {
    background-color: #00337c;
    padding: 10px;
    text-align: center;
    bottom: 0;
    width: 98.5%;
    z-index: 9999;
}

.centered {
    display: flex;
    justify-content: center;
    align-items: center;
}

p{
    color: white;
    font-family: 'Noto Sans JP', sans-serif;
    margin-top: 28px; 

}

.logo-fenix-footer {
    margin-right: 20px;
}

.logo-redes-footer {
    margin-left: 10px;
    margin-top: 28px;
}
</style>
