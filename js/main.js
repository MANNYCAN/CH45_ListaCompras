const btnAgregar = document.getElementById("btnAgregar");
const txtName = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

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

//Oreja y funcion anomima 
btnAgregar.addEventListener("click", function(event){
    //Prevenir por defecto [Indicar que quermeos se haga]
    event.preventDefault();
    txtName.style.border="";
    txtName.style.border="";
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.border = "none";
//Trim: metodo que quita espacio al inicio y al final 
/**VALIDAR NOMBRE */
    if(txtName.value.trim().length<3){
        txtName.style.border="solid red medium";
        alertValidacionesTexto.innerHTML = "El <strong>Nombre</strong> no es correcto.<br/>";
        alertValidaciones.style.display = "block";
        //return false;
    }// if length<3

    //VALIDAR LA CANTIDAS
    if(! validarCantidad()){
        txtNumber.style.border="solid red medium";
        alertValidacionesTexto.innerHTML += "La <strong>Cantidad</strong> no es correcta.<br/>";
        alertValidaciones.style.display = "block";
    }
    

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