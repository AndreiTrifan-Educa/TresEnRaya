let arrayTabla = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
let turno = 'X'; // Jugador que empieza, puede ser 'X' o 'O'

const celdas = document.querySelectorAll('.celda');
const turnoDiv = document.getElementById('turnoIMG');

turnoDiv.src="cross.png";


// Agregar un evento click a cada celda
celdas.forEach((celda, index) => {
    celda.addEventListener('click', () => {
        // Solo permite marcar celdas vacías
        if (!arrayTabla[Math.floor(index / 3)][index % 3]) {
            arrayTabla[Math.floor(index / 3)][index % 3] = turno;
            const img = document.createElement('img');
            img.src = (turno === "X") ? "cross.png" : "circulo.png";
            img.style.width = "80%"; 
            img.style.height = "80%";
            celda.appendChild(img); // Añadir la imagen a la celda
            if (tresEnRaya(arrayTabla)) {
                alert("¡El jugador " + turno + " ha ganado!");
            } else {
                turno = (turno === "X") ? "O" : "X"; // Cambiar turno
                turnoDiv.src = (turno === "X") ? "cross.png" : "circulo.png"; 
            }
        }
    });
});


function tresEnRaya(arrayTabla){
    ganador=false;
    //Comprobar filas (funciona, no tocar)
    for (let i = 0; i < arrayTabla.length; i++) {
        for (let j = 0; j < arrayTabla.length-1; j++) {
            if(arrayTabla[i][j]!=null && arrayTabla[i][j]==arrayTabla[i][j+1]){
                //console.log("True" + " " + i + " " + j);
                ganador=true;
            }else{
                //console.log("False" + " " + i + " " + j);
                ganador=false;
                break;
            }
        }
        if(ganador){
            console.log("1");
            return ganador;
        }
    }
    //Fin comprobar filas

    //Comprobar columnas
    for (let j = 0; j < arrayTabla.length; j++) { //Misma lógica pero ahora iterando las columnas
        for (let i = 0; i < arrayTabla.length-1; i++) {
            if(arrayTabla[i][j]!=null && arrayTabla[i][j]==arrayTabla[i+1][j]){
                ganador=true;
            }else{
                ganador=false;
                break;
            }
        }
        if(ganador){
            console.log("2");
            return ganador;
        }
    }
    //Fin comprobar columnas

    //Comprobar diagonal \
    for (let i = 0; i < arrayTabla.length-1; i++) { 
            if(arrayTabla[i][i]!=null){
                if(arrayTabla[i][i]==arrayTabla[i+1][i+1]){
                    ganador=true;
                }else{
                    ganador=false;
                    break;
                }
            }else{
                ganador=false;
                break;
            }     
    }
    if(ganador){
        console.log("3");
        return ganador;
    }
    //Fin comprobar diagonal \

     //Comprobar diagonal /
     for (let i = 0; i < arrayTabla.length-1; i++) { 
            if(arrayTabla[i][arrayTabla.length-(i+1)]!=null){
                if(arrayTabla[i][arrayTabla.length-(i+1)] == arrayTabla[i+1][arrayTabla.length-(i+2)]){
                    ganador=true;
                }else{
                    ganador=false;
                    break;
                }
            }else{
                ganador=false;
                break;
            }
    }
    //Fin comprobar diagonal /
return ganador;
}