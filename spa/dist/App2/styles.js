(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* ANIMACIONES*/\n\n.animated {\n    -webkit-animation-duration: 1s;\n    animation-duration: 1s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n.fast {\n    -webkit-animation-duration: 0.4s;\n    animation-duration: 0.4s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n}\n\n/* CONTENEDORES */\n\n.main-container {\n    margin-bottom: 30px;\n}\n\n.container {\n    text-align: center;\n}\n\n/*CONTENEDOR PARA EL LOGIN*/\n\n.container-login {\n    margin-top: 80px;\n    margin-bottom: 50px;\n    width: 100%;\n}\n\n/*CONTENEDOR PARA LA CONSULTA DEL LOTE DE PAGOS*/\n\n.container-consulta-lote {\n    margin-top: 10px;\n    margin-bottom: 50px;\n    width: 100%;\n}\n\n.container-body {\n    margin-top: 30px;\n}\n\n.container-login-ofertas {\n    display: flex;\n    justify-content: center;\n    margin-top: 50px;\n    margin-bottom: 50px;\n    width: 100%;\n    margin-right: 50px;\n    border-color: #292929;\n}\n\n/* TITULOS */\n\nh3 {\n    text-align: left;\n    font-family: 'Nunito', sans-serif;\n    font-weight: 400;\n    color: #00448D;\n    /*Colores oficiales del Banco*/\n}\n\nh5 {\n    font-family: 'Nunito', sans-serif;\n    font-weight: bold;\n    font-weight: 700;\n    font-stretch: normal;\n    line-height: 26px;\n    letter-spacing: -0.6px;\n    color: #292929;\n    /*Colores oficiales del Banco*/\n    font-size: 24px;\n}\n\nh4 {\n    text-align: left;\n    font-family: \"Arial Rounded MT Bold\", \"Helvetica Rounded\", Arial, sans-serif;\n}\n\nh6 {\n    text-align: left;\n    font-family: Nunito;\n    /*Fuente oficial del Banco*/\n}\n\nhr {\n    overflow: hidden;\n}\n\n/*CUERPO Y HTML*/\n\nbody {\n    font-family: \"Arial Rounded MT Bold\", \"Helvetica Rounded\", Arial, sans-serif;\n}\n\nhtml {\n    font-family: \"Arial Rounded MT Bold\", \"Helvetica Rounded\", Arial, sans-serif;\n}\n\n/*ITEMS DEL NAVBAR*/\n\n.nav-item {\n    padding-top: 10px;\n    padding-left: 10px;\n}\n\n/*PARA EL CONTENIDO*/\n\n.-label {\n    width: 75px;\n    height: 24px;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: -0.3px;\n    color: #00448d;\n    /*Colores oficiales del Banco*/\n}\n\n/*PARA LAS CABECERAS*/\n\n.label {\n    width: 50px;\n    height: 20px;\n    font-family: Nunito;\n    font-size: 20px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.2;\n    letter-spacing: -0.4px;\n    color: #292929;\n    /*Colores oficiales del Banco*/\n    background-color: #f7f7f7;\n    border-color: #ffffff;\n}\n\n/*DISEÑO DE BOTONES OFICIALES DEL BANCO*/\n\n/*BOTONES PRINCIPALES*/\n\n.btn.btn-primary {\n    background-color: #ffcf01;\n    /*Colores oficiales del Banco*/\n    width: 150px;\n    height: 35px;\n    font-family: Nunito;\n    font-size: 15px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.2;\n    letter-spacing: -0.4px;\n    text-align: center;\n    color: #292929;\n    border-color: #ffd200;\n}\n\n.btn {\n    border-radius: 30px;\n    box-sizing: border-box;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n    display: inline-block;\n    max-width: 100%;\n    /* padding: 14px 40px;*/\n    text-align: center;\n    text-decoration: none;\n    text-transform: uppercase;\n}\n\n/*BOTONES PARA CARGA DE INFORMACION*/\n\n.buttonCargaPrimary {\n    background-color: #ffcf01;\n    width: 130px;\n    height: 30px;\n    font-family: Nunito;\n    font-size: 15px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.2;\n    letter-spacing: -0.4px;\n    text-align: center;\n    color: #292929;\n    border-color: #ffcf01;\n    border-radius: 30px;\n    box-sizing: border-box;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n    display: inline-block;\n    max-width: 100%;\n    /* padding: 14px 40px;*/\n    text-align: center;\n    text-decoration: none;\n    text-transform: uppercase;\n}\n\n.buttonCargaSecondary {\n    background-color: white;\n    width: 130px;\n    height: 30px;\n    border-color: #00448D 1px;\n    color: #00448D;\n    font-family: Nunito;\n    font-size: 15px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.2;\n    letter-spacing: -0.4px;\n    text-align: center;\n}\n\n/*BOTON SECUNDARIO*/\n\n.btn.btn-secondary {\n    background-color: white;\n    width: 150px;\n    height: 35px;\n    border-color: #00448D 1px;\n    color: #00448D;\n    font-family: Nunito;\n    font-size: 15px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.2;\n    letter-spacing: -0.4px;\n    text-align: center;\n}\n\n/*BOTON OPACO O DESHABILITADO*/\n\n.btn-opacity {\n    border-radius: 30000px;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 0 2px 0 rgba(0, 0, 0, 0.16);\n    background-color: #747779;\n    font-family: Nunito;\n    width: 150px;\n    height: 35px;\n    opacity: 0.65;\n    font-size: 15px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.07;\n    letter-spacing: -0.6px;\n    text-align: center;\n    color: #292929;\n    cursor: pointer;\n}\n\n/*BOTON GRAFICA DE RECOMENDACION*/\n\n.BotonGrafica {\n    width: 150px;\n    height: 35px;\n    font-family: Nunito;\n    font-size: 15px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.2;\n    letter-spacing: -0.4px;\n    text-align: center;\n    border-radius: 30000px;\n    cursor: pointer;\n    border-color: #00448d 1px;\n    color: #00448d;\n    background-color: white;\n    box-sizing: border-box;\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);\n    text-decoration: none;\n    text-transform: uppercase;\n    display: block;\n}\n\n.BotonGrafica:hover {\n    background-color: #00448d;\n    color: white;\n}\n\n/*BOTONES DE REGRESAR Y SIGUIENTE*/\n\n.Previous {\n    border-radius: 10000px;\n    background-color: #ffcf01;\n    width: 40px;\n    height: 40px;\n    font-family: Nunito;\n    font-size: 15px;\n    font-weight: bold;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.2;\n    letter-spacing: -0.4px;\n    text-align: center;\n    color: #292929;\n    border-color: #ffd200;\n    cursor: pointer;\n}\n\n.Next {\n    width: 40px;\n    height: 40px;\n    border-radius: 10000px;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 0 2px 0 rgba(0, 0, 0, 0.16);\n    background-color: #ffcf01;\n    border-color: #ffcf01;\n    color: #292929;\n    cursor: pointer;\n}\n\n/*TODOS LOS CHECK BOX EN EL CENTRO*/\n\n.form-check-input {\n    position: relative;\n}\n\ninput[type=\"date\"]:before {\n    content: attr(placeholder) !important;\n    color: #808080;\n    margin-right: 0.5em;\n}\n\ninput[type=\"date\"]:focus:before,\ninput[type=\"date\"]:valid:before {\n    content: \"\";\n}\n\n.imgIcon {\n    padding-left: 10px;\n}\n\n/*LABELS PARA INGRESO DE USUARIO Y CLAVE*/\n\n.labelUser {\n    float: center;\n    padding: 12px 20px 12px 16px;\n    text-align: center;\n    font-family: \"Arial Rounded MT Bold\", \"Helvetica Rounded\", Arial, sans-serif;\n    margin-top: 5px;\n}\n\n.labelPassword {\n    float: center;\n    padding: 12px 20px 12px 16px;\n    text-align: center;\n    margin-top: 5px;\n    font-family: \"Arial Rounded MT Bold\", \"Helvetica Rounded\", Arial, sans-serif;\n}\n\n/*ESTILO DE LA CLASE FORM CONTROL - PARA INPUTS, CHECKBOX*/\n\n.form-control {\n    vertical-align: middle;\n    text-align: justify;\n}\n\n.form-control-password {\n    vertical-align: middle;\n    position: relative;\n}\n\n/*LOGOS*/\n\n.sub-logo-component {\n    background: #00448D;\n}\n\n.col-sm-12 {\n    padding-left: 200px;\n    padding-right: 250px;\n}\n\n/* CLASE DE LOS ICONOS*/\n\n.fa-li {\n    text-align: left;\n}\n\n/*ESTILO PARA ALINEAR LOS INPUT DEL HOME*/\n\n.col-sm-2 {\n    padding-right: 20px;\n}\n\n.detalle-footer {\n    margin: 0px!important;\n    background-color: #e6e7e8!important;\n    padding: 1.5em!important;\n    bottom: 0px;\n    width: 100%;\n    display: inline-flex;\n    display: table!important;\n    box-sizing: border-box;\n}\n\n/*CONTENEDOR PARA LA DESCRIPCION DE CADA FAMILIA Y/O INFORMACION ADICIONAL*/\n\n.descripcion {\n    font-family: 'Nunito', sans-serif;\n    font-size: 16px;\n    font-weight: 300;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: -0.3px;\n    color: #292929;\n    text-justify: auto;\n}\n\n/*TEXTO DE LAS TARJETAS*/\n\n.card-text {\n    margin-top: 10px;\n    margin-left: 10px;\n}\n\n/*FORMATO PARA EL GRUPO DE LISTA*/\n\n.list-group {\n    size: 60px;\n}\n\n/*ESTILO DE LAS LISTAS, ALINEADAS A LA IZQUIERDA, ORDENADAS Y NO ORDENADAS*/\n\nul {\n    text-align: left;\n}\n\nli {\n    text-align: left;\n}\n\nol {\n    padding-left: 15px;\n}\n\ndl {\n    list-style: none;\n}\n\n.row-seguros {\n    padding-top: 20px;\n}\n\n.col-sm-10 {\n    padding-left: 5px;\n}\n\np {\n    text-align: left;\n    margin-bottom: 0.5rem;\n    font-size: 16px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: 1.5;\n    letter-spacing: -0.3px;\n}\n\n.form-row {\n    padding-left: 450px;\n}\n\n/*#bb {\n    padding: 10px;\n    display: table;\n    color: #fff;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,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QUN2Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4QixzQkFBc0I7QUFDMUI7O0FBR0EsMkVBQTJFOztBQUUzRTtJQUNJLGlDQUFpQztJQUNqQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBR0Esd0JBQXdCOztBQUV4QjtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBR0EsaUNBQWlDOztBQUVqQztJQUNJLFVBQVU7QUFDZDs7QUFHQSwyRUFBMkU7O0FBRTNFO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFHQTs7Ozs7Q0FLQyIsImZpbGUiOiJzcmMvc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFOSU1BQ0lPTkVTKi9cblxuLmFuaW1hdGVkIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmZhc3Qge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuXG4vKiBDT05URU5FRE9SRVMgKi9cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLypDT05URU5FRE9SIFBBUkEgRUwgTE9HSU4qL1xuXG4uY29udGFpbmVyLWxvZ2luIHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuLypDT05URU5FRE9SIFBBUkEgTEEgQ09OU1VMVEEgREVMIExPVEUgREUgUEFHT1MqL1xuXG4uY29udGFpbmVyLWNvbnN1bHRhLWxvdGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lci1ib2R5IHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uY29udGFpbmVyLWxvZ2luLW9mZXJ0YXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBib3JkZXItY29sb3I6ICMyOTI5Mjk7XG59XG5cblxuLyogVElUVUxPUyAqL1xuXG5oMyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzAwNDQ4RDtcbiAgICAvKkNvbG9yZXMgb2ZpY2lhbGVzIGRlbCBCYW5jbyovXG59XG5cbmg1IHtcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xuICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgIC8qQ29sb3JlcyBvZmljaWFsZXMgZGVsIEJhbmNvKi9cbiAgICBmb250LXNpemU6IDI0cHg7XG59XG5cbmg0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsIFJvdW5kZWQgTVQgQm9sZFwiLCBcIkhlbHZldGljYSBSb3VuZGVkXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5oNiB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIC8qRnVlbnRlIG9maWNpYWwgZGVsIEJhbmNvKi9cbn1cblxuaHIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuLypDVUVSUE8gWSBIVE1MKi9cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFwiQXJpYWwgUm91bmRlZCBNVCBCb2xkXCIsIFwiSGVsdmV0aWNhIFJvdW5kZWRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsIFJvdW5kZWQgTVQgQm9sZFwiLCBcIkhlbHZldGljYSBSb3VuZGVkXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG5cbi8qSVRFTVMgREVMIE5BVkJBUiovXG5cbi5uYXYtaXRlbSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5cbi8qUEFSQSBFTCBDT05URU5JRE8qL1xuXG4uLWxhYmVsIHtcbiAgICB3aWR0aDogNzVweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XG4gICAgY29sb3I6ICMwMDQ0OGQ7XG4gICAgLypDb2xvcmVzIG9maWNpYWxlcyBkZWwgQmFuY28qL1xufVxuXG5cbi8qUEFSQSBMQVMgQ0FCRUNFUkFTKi9cblxuLmxhYmVsIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBjb2xvcjogIzI5MjkyOTtcbiAgICAvKkNvbG9yZXMgb2ZpY2lhbGVzIGRlbCBCYW5jbyovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcbiAgICBib3JkZXItY29sb3I6ICNmZmZmZmY7XG59XG5cblxuLypESVNFw5FPIERFIEJPVE9ORVMgT0ZJQ0lBTEVTIERFTCBCQU5DTyovXG5cblxuLypCT1RPTkVTIFBSSU5DSVBBTEVTKi9cblxuLmJ0bi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2YwMTtcbiAgICAvKkNvbG9yZXMgb2ZpY2lhbGVzIGRlbCBCYW5jbyovXG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzI5MjkyOTtcbiAgICBib3JkZXItY29sb3I6ICNmZmQyMDA7XG59XG5cbi5idG4ge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgLyogcGFkZGluZzogMTRweCA0MHB4OyovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG5cbi8qQk9UT05FUyBQQVJBIENBUkdBIERFIElORk9STUFDSU9OKi9cblxuLmJ1dHRvbkNhcmdhUHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2YwMTtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgIGJvcmRlci1jb2xvcjogI2ZmY2YwMTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIC8qIHBhZGRpbmc6IDE0cHggNDBweDsqL1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ1dHRvbkNhcmdhU2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1jb2xvcjogIzAwNDQ4RCAxcHg7XG4gICAgY29sb3I6ICMwMDQ0OEQ7XG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLypCT1RPTiBTRUNVTkRBUklPKi9cblxuLmJ0bi5idG4tc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlci1jb2xvcjogIzAwNDQ4RCAxcHg7XG4gICAgY29sb3I6ICMwMDQ0OEQ7XG4gICAgZm9udC1mYW1pbHk6IE51bml0bztcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuLypCT1RPTiBPUEFDTyBPIERFU0hBQklMSVRBRE8qL1xuXG4uYnRuLW9wYWNpdHkge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwMDAwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDAgMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzQ3Nzc5O1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBvcGFjaXR5OiAwLjY1O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuMDc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICMyOTI5Mjk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8qQk9UT04gR1JBRklDQSBERSBSRUNPTUVOREFDSU9OKi9cblxuLkJvdG9uR3JhZmljYSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBmb250LWZhbWlseTogTnVuaXRvO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMDAwMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItY29sb3I6ICMwMDQ0OGQgMXB4O1xuICAgIGNvbG9yOiAjMDA0NDhkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLkJvdG9uR3JhZmljYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNDQ4ZDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuLypCT1RPTkVTIERFIFJFR1JFU0FSIFkgU0lHVUlFTlRFKi9cblxuLlByZXZpb3VzIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNmMDE7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtZmFtaWx5OiBOdW5pdG87XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZDIwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5OZXh0IHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwMDBweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNmMDE7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZjZjAxO1xuICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vKlRPRE9TIExPUyBDSEVDSyBCT1ggRU4gRUwgQ0VOVFJPKi9cblxuLmZvcm0tY2hlY2staW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1cImRhdGVcIl06YmVmb3JlIHtcbiAgICBjb250ZW50OiBhdHRyKHBsYWNlaG9sZGVyKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjODA4MDgwO1xuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XG59XG5cbmlucHV0W3R5cGU9XCJkYXRlXCJdOmZvY3VzOmJlZm9yZSxcbmlucHV0W3R5cGU9XCJkYXRlXCJdOnZhbGlkOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbn1cblxuLmltZ0ljb24ge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuXG4vKkxBQkVMUyBQQVJBIElOR1JFU08gREUgVVNVQVJJTyBZIENMQVZFKi9cblxuLmxhYmVsVXNlciB7XG4gICAgZmxvYXQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCAxNnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogXCJBcmlhbCBSb3VuZGVkIE1UIEJvbGRcIiwgXCJIZWx2ZXRpY2EgUm91bmRlZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5sYWJlbFBhc3N3b3JkIHtcbiAgICBmbG9hdDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHggMjBweCAxMnB4IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBmb250LWZhbWlseTogXCJBcmlhbCBSb3VuZGVkIE1UIEJvbGRcIiwgXCJIZWx2ZXRpY2EgUm91bmRlZFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuXG4vKkVTVElMTyBERSBMQSBDTEFTRSBGT1JNIENPTlRST0wgLSBQQVJBIElOUFVUUywgQ0hFQ0tCT1gqL1xuXG4uZm9ybS1jb250cm9sIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5mb3JtLWNvbnRyb2wtcGFzc3dvcmQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5cbi8qTE9HT1MqL1xuXG4uc3ViLWxvZ28tY29tcG9uZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjMDA0NDhEO1xufVxuXG4uY29sLXNtLTEyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1MHB4O1xufVxuXG5cbi8qIENMQVNFIERFIExPUyBJQ09OT1MqL1xuXG4uZmEtbGkge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cblxuLypFU1RJTE8gUEFSQSBBTElORUFSIExPUyBJTlBVVCBERUwgSE9NRSovXG5cbi5jb2wtc20tMiB7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLmRldGFsbGUtZm9vdGVyIHtcbiAgICBtYXJnaW46IDBweCFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTdlOCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMS41ZW0haW1wb3J0YW50O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGRpc3BsYXk6IHRhYmxlIWltcG9ydGFudDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5cbi8qQ09OVEVORURPUiBQQVJBIExBIERFU0NSSVBDSU9OIERFIENBREEgRkFNSUxJQSBZL08gSU5GT1JNQUNJT04gQURJQ0lPTkFMKi9cblxuLmRlc2NyaXBjaW9uIHtcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICAgIGNvbG9yOiAjMjkyOTI5O1xuICAgIHRleHQtanVzdGlmeTogYXV0bztcbn1cblxuXG4vKlRFWFRPIERFIExBUyBUQVJKRVRBUyovXG5cbi5jYXJkLXRleHQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cblxuLypGT1JNQVRPIFBBUkEgRUwgR1JVUE8gREUgTElTVEEqL1xuXG4ubGlzdC1ncm91cCB7XG4gICAgc2l6ZTogNjBweDtcbn1cblxuXG4vKkVTVElMTyBERSBMQVMgTElTVEFTLCBBTElORUFEQVMgQSBMQSBJWlFVSUVSREEsIE9SREVOQURBUyBZIE5PIE9SREVOQURBUyovXG5cbnVsIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5saSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxub2wge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuZGwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5yb3ctc2VndXJvcyB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5jb2wtc20tMTAge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG5wIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xufVxuXG4uZm9ybS1yb3cge1xuICAgIHBhZGRpbmctbGVmdDogNDUwcHg7XG59XG5cblxuLyojYmIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgY29sb3I6ICNmZmY7XG59XG4qLyJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\USER\Documents\spa\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map