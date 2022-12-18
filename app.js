var buttsearchButton = document.getElementById('searchButton')
var search =document.getElementById('search')
search.addEventListener("keypress" ,function(E){
    if (event.key=="Enter"){
        var Buscador = document.getElementById('search').value
    BuscarPalabrasEnPagina(Buscador);
    console-log("hola")
    }
})
buttsearchButton.addEventListener('click' , function(e){
    var Buscador = document.getElementById('search').value
    BuscarPalabrasEnPagina(Buscador);
});

function BuscarPalabrasEnPagina(PalabraBuscar){
    BanderaPalabra = false;
    console.log("llego la  Palabra Buscar a la funcion  = " + PalabraBuscar);
    
    var CantidadPalabrasDiccionario = document.getElementsByClassName("titulo2").length
    for (let i = 0; i < CantidadPalabrasDiccionario; i++) {
         var palabraHtml = document.getElementsByClassName("titulo2")[i].textContent
        if ( palabraHtml === PalabraBuscar) {
            var PosicionComponente = document.getElementsByClassName("titulo2")[i];
            var cordenada = PosicionComponente.getBoundingClientRect()
            console.log("Encontre la posicion = " + i + " = " + cordenada.top);
            window.scrollTo({ left: 0, top: cordenada.top , behavior: 'smooth' });
            BanderaPalabra = true;
            return;
        }
    }
    if (BanderaPalabra == false){
        alert("Lo sentimos No encontre la palabra en el Diccionario ! ");
    }
}var element = document.getElementById("search");
element.addEventListener("keypress", function(event) {
	 if (event.key === "Enter") {
 		console.log("prueba")
 		event.preventDefault();
     }
});

