let button = document.querySelector(".button")
let instagram = document.querySelector(".instagram")
let linkedin = document.querySelector(".linkedin")
let github = document.querySelector(".github")
let discord = document.querySelector(".discord")
let abrirResponsive = document.querySelector(".icono")
let cerrarResponsive = document.querySelector(".iconoApagado")
let responsivebox = document.querySelector("header")
let centro = document.querySelector(".center")
let ulBox = document.querySelector(".center-box")
let responsiveList = document.querySelector(".responsive-list")
let aparecerBool = false;
let colors = ["red","darkpurple","blue","blue"]
const listResponsive = document.querySelectorAll(".listD");

for(let i = 0; i< listResponsive.length; i++){
    listResponsive[i].addEventListener("mouseup", function(){
        setTimeout(() => {
            cerrar()
        }, 800);
    })
}

let redesSociales = [instagram, linkedin, github, discord]

for(let i = 0; i< redesSociales.length; i++){
    redesSociales[i].style.zIndex = "5"
    redesSociales[i].style.transition = ".5s"
    redesSociales[i].setAttribute("id", "animacionCrecer")
    redesSociales[i].addEventListener("mouseover", function(){
        redesSociales[i].style.color = colors[i]
    })
    redesSociales[i].addEventListener("mouseout", function(){
        redesSociales[i].style.color = "black"
    })
}


document.addEventListener("mousemove", parallax);

        function parallax(e) {
            document.querySelectorAll(".object").forEach(function (move) {
                var moving_value = move.getAttribute("data-value");
                var x = (e.clientX * moving_value) / 250;
                var y = (e.clientY * moving_value) / 250;
                move.style.transform =
                    "translateX(" + x + "px) translateY(" + y + "px)";
            });
        }

button.style.opacity = 0;

setTimeout(() => {
    button.setAttribute("class", "aparecer")
}, 10000);



abrirResponsive.addEventListener("click",function(){
   aparecer();
   
   setTimeout(() => {
    abrirResponsive.style.display = "none"
    cerrarResponsive.style.display = "flex"

   }, 1700);

   
})
function cerrar(){
    desaparecer();
    setTimeout(() => {
     abrirResponsive.style.display = "flex"
     abrirResponsive.style.flexDirection = "column"
    }, 1700);
     cerrarResponsive.style.display = "none"
}

cerrarResponsive.addEventListener("click",function(){
    desaparecer();
   setTimeout(() => {
    abrirResponsive.style.display = "flex"
    abrirResponsive.style.flexDirection = "column"
   }, 1700);
    cerrarResponsive.style.display = "none"
    
 })
function desaparecer(){
    responsivebox.style.animationName = "desaparecerResponsive"
    centro.style.alignItems = "center"
    centro.style.marginTop = "0%"
    responsiveList.style.display = "none"

 
}

function aparecer(){
    responsivebox.style.animationName = "aparecerResponsive"
   setTimeout(() => {
    responsiveList.style.display = "flex"
    responsiveList.setAttribute("class", "responsive-list aparecer")
   }, 1700);
}