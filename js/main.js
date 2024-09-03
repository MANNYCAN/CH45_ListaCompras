const btnAgregar = document.getElementById("btnAgregar");
const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
const tablaListaCompras = document.getElementById("tablaListaCompras");
const cuerpoTabla = tablaListaCompras.getElementsByTagName("tbody").item(0);
const contadorProductos = document.getElementById("contadorProductos");
const productosTotal = document.getElementById("productosTotal");
const precioTotal = document.getElementById("precioTotal");


//BANDERA, AL SER TRUE PERMITE AGREGAR DATOS A LA TABLA
let isValid = true;
let contador = 0;
let precio = 0;
let costoTotal = 0;
let totalProducto = 0;

function validarCantidad(){
    //Validamos que la longitus sea mayor a 0
    if(txtNumber.value.length==0){
        return false;
    }// lenght == 0
//isNotaNumber para validar que sea numero
    if(isNaN(txtNumber.value)){
        return false;
    }
//Vlidar que sea mayor a 0
    if(Number(txtNumber.value)<=0){
        return false;
    }

    return true; 
}//validar cantidad()

//FUNCION DE PRECIO 
function getPrecio(){
    return Math.round((Math.random()*10000))/100;
}//getPrecio


//Oreja y funcion anomima 
btnAgregar.addEventListener("click", function(event){
    //Prevenir por defecto [Indicar que quermeos se haga]
    event.preventDefault();
    txtName.style.border="";
    txtNumber.style.border="";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
    isValid = true;
//Trim: metodo que quita espacio al inicio y al final 
/**VALIDAR NOMBRE */
    if(txtName.value.trim().length<3){
        txtName.style.border="solid red medium";
        alertValidacionesTexto.innerHTML = "El <strong>Nombre</strong> no es correcto.<br/>";
        alertValidaciones.style.display = "block";
        isValid = false;
        //return false;
    }// if length<3

    //VALIDAR LA CANTIDAS
    if(! validarCantidad()){
        txtNumber.style.border="solid red medium";
        alertValidacionesTexto.innerHTML += "La <strong>Cantidad</strong> no es correcta.<br/>";
        alertValidaciones.style.display = "block";
        isValid = false;
    }

    if(isValid){
        contador++;
        precio = getPrecio();
        let row = `<tr>
                    <td>${contador}</td>
                    <td>${txtName.value}</td>
                    <td>${txtNumber.value}</td>
                    <td>${precio}</td>
        </tr>`
        cuerpoTabla.insertAdjacentHTML("beforeend", row);
        costoTotal += precio * Number(txtNumber.value);
        totalProducto += Number(txtNumber.value);
        contadorProductos.innerText = contador;
        productosTotal.innerText = totalProducto; 
        precioTotal.innerText = "$ " + costoTotal.toFixed(2); 

        localStorage.setItem("contador", contador);
        localStorage.setItem("totalProducto", totalProducto);
        localStorage.setItem("costoTotal", costoTotal);


        txtName.value = "";
        txtNumber.value = "";
        txtName.focus(); 
    }//isValid 
    

}) //btnAgregar. addEventListener

/**Este evento quita los espacios de los nombrs introducidos 
 * Blur: un campo pierde el foco 
*/

txtName.addEventListener("blur", function(event){
    txtName.value = txtName.value.trim();
}) //txtName.addEventListener

txtNumber.addEventListener("blur", function(event){
    txtNumber.value = txtNumber.value.trim();
}) //txtName.addEventListener


//LOAD DE NUESTRA PAGINA
window.addEventListener("load", function(){
    if (this.localStorage.getItem("contador") != null){
        contador = Number(this.localStorage.getItem("contador"));
    }//!=null
    if (this.localStorage.getItem("totalProducto") != null){
        totalProducto = Number(this.localStorage.getItem("totalProducto"));
    }//!=null
    if (this.localStorage.getItem("costoTotal") != null){
        costoTotal = Number(this.localStorage.getItem("costoTotal"));
    }//!=null
    contadorProductos.innerText = contador;
    productosTotal.innerText = totalProducto; 
    precioTotal.innerText = "$ " + costoTotal.toFixed(2); 
})