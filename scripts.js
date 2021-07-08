console.log(document.title);

document.querySelector("#gen-1").innerHTML = "Generasión 1 Pokimon"
                                                                                                                            
 let fondoUno = document.querySelector(".infocard-list.infocard-list-pkmn-lg").querySelectorAll(".infocard")

for (let i = 0; i < fondoUno.length; i++) {
   
    fondoUno[i].style.backgroundColor = "red"

}

console.log(document.URL);
console.log(document.domain);


let imagenes = document.querySelectorAll("img");
 // console.log(imagenes);

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
    
}

titulo = document.querySelectorAll(".infocard-lg-data.text-muted > small:nth-child(5) > a.itype.flying")

for (let i = 0; i < titulo.length; i++) {
    titulo[i].style.backgroundColor = "blue"
}
