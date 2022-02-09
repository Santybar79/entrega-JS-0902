//Bienvenida

const saludar = () => {

    alert("Bienvenido a Mi Tienda!");
};

//Cuestionario Producto
const cuadros = () => {
    let cuadroID;

    do {
        cuadroID = parseInt(
            prompt(
                "Que cuadro te gustaria comprar?\n 1) Collage 1 \n 2) Collage 2 \n 3) Collage 3 \n 4) Collage 4"
            )
        );
    } while (cuadroID < 1 || cuadroID > 4 || isNaN(cuadroID));

    let cuadroTitulo;

    switch (cuadroID) {
        case 1:
            cuadroTitulo = "Collage 1";
            break;
        case 2:
            cuadroTitulo = "Collage 2";
            break;
        case 3:
            cuadroTitulo = "Collage 3";
            break;
        case 4:
            cuadroTitulo = "Collage 4";
            break;

    }

    return cuadroTitulo;

};

// Calculo de Precio

const calcularPrecio = (cuadroTitulo) => {
    if (cuadroTitulo === "Collage 1") {
        return 120;
    } else if (cuadroTitulo === "Collage 2") {
        return 90;

    } else if (cuadroTitulo === "Collage 3") {
        return 115;

    } else if (cuadroTitulo === "Collage 4") {
        return 130;


    }
};

//Informa al cliente la Obra y el Valor

const informarPrecio = (cuadroTitulo, precioCuadro) => {
    let texto = `Cuadro : ${cuadroTitulo}\n Precio : ${precioCuadro}`
    alert("Usted Compro:")
    alert(texto)

}

saludar();
let cuadroTitulo = cuadros();
let precioCuadro = calcularPrecio(cuadroTitulo);
informarPrecio(cuadroTitulo, precioCuadro)