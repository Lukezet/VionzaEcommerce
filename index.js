let bodyAll = document.getElementById("body");
let sectionUser = document.getElementById("user");
let btnLogin = document.getElementById("btnLogin");
let cadenaEmail = document.getElementById("Email");
let password = document.getElementById("new-password");
let rutes = document.getElementById("rutes");
let cartShop = document.getElementById("cartShop");
let loged = false;


let navFilter = ["ALL", "BORSEGOS", "BOTAS", "TEXANAS"];


for (i = 0; i < navFilter.length; i++){
    let btnFilter = document.createElement("button");
    btnFilter.textContent = navFilter[i];
    rutes.innerHTML= btnFilter;
};

let btnCart = document.createElement("button");
btnCart.setAttribute("src", "./src/icons/icon_shopping_cart_notification.svg");
cartShop.innerHTML = btnCart;

btnCart.addEventListener("click", function(){
    //recuperacion de productos del localstorage
    let elementos = [0];
    cartDetails(elementos);
})


function createHashMap(array, key) {
	return array.reduce((acum, currentValue) => {
		return {
			...acum,
			[`${currentValue[key]}`]: currentValue
		}
	}, {})
}



function cartDetails(elementos){
    
    let listaProductos = createHashMap(elementos, "id");
    let ulElement = document.createElement("ul");
    for(i = 0; i < listaProductos; i++){
        let liElement = document.createElement("li");
        liElement.id = listaProductos[i];
        liElement.textContent = listaProductos[i].title;
        //añadir a liElement los detalles del producto
        ulElement.appendChild(liElement);
    }
    cartShop.appendChild(ulElement);
}




btnLogin.addEventListener("click", function(){
    //info recuperada
    //validacion datos
    
    loged = true;
    //fin validacion
    let email = "camilasoho@example.com"
    email.id = "txtEmail";
    sectionUser.innerHTML = email;
})



if(loged == false){
    let button = document.createElement("button");
    button.id = "btnUser";
    button.textContent = "Login"
    sectionUser.innerHTML = button;
}




main();
