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

const productos = [
    {
        imagen:"src/img/EVI.png",
        nombre:"EVI",
        talle:"40",
        color:"beige",
        descripcion:"Botineta de cuero vegan y base color suela.",
        precio: 13500   
    },
    {
        imagen:"src/img/EVI.png",
        nombre:"EVI",
        talle:"39",
        color:"beige",
        descripcion:"Botineta de cuero vegan y base color suela.",
        precio: 13500   
    },
    {
        imagen:"src/img/EVI2.png",
        nombre:"EVI",
        talle:"37",
        color:"negro",
        descripcion:"Botineta de cuero vegan y base color negro.",
        precio: 13500   
    },
    {
        imagen:"src/img/MADISON.png",
        nombre:"MADISON",
        talle:"40",
        color:"negro",
        descripcion:"Botineta de cuero vegan y base color negro.",
        precio: 13500   
    },
    {
        imagen:"src/img/MADISON.png",
        nombre:"MADISON",
        talle:"39",
        color:"negro",
        descripcion:"Botineta de cuero vegan y base color negro.",
        precio: 13500   
    },
    {
        imagen:"src/img/CLOY.png",
        nombre:"CLOY",
        talle:"39",
        color:"beige",
        descripcion:"Botineta de cuero vegan y base color suela.",
        precio: 14500   
    },
    {
        imagen:"src/img/CLOY.png",
        nombre:"CLOY",
        talle:"38",
        color:"beige",
        descripcion:"Botineta de cuero vegan y base color suela.",
        precio: 14500   
    },
    {
        imagen:"src/img/CLOY.png",
        nombre:"CLOY",
        talle:"37",
        color:"beige",
        descripcion:"Botineta de cuero vegan y base color suela.",
        precio: 14500   
    },
    {
        imagen:"src/img/ANA.png",
        nombre:"ANA",
        talle:"37",
        color:"negro",
        descripcion:"Botineta de cuero vacuno y base color negro.",
        precio: 16000   
    },
    {
        imagen:"src/img/BIANCA.png",
        nombre:"BIANCA",
        talle:"38",
        color:"suela",
        descripcion:"Botineta de cuero vegan y base color suela.",
        precio: 14000   
    },
    {
        imagen:"src/img/BIANCA2.png",
        nombre:"BIANCA",
        talle:"38",
        color:"negro",
        descripcion:"Botineta de cuero vegan y base color negro.",
        precio: 14000   
    },
    {
        imagen:"src/img/PRAGA.png",
        nombre:"PRAGA",
        talle:"38",
        color:"negro",
        descripcion:"Botineta de cuero vegan y base color negro.",
        precio: 13000   
    },
    ]


main();
