const fs = require('fs/promises');
let objectJSON = {};

function crearDatos() {
    let nameMi = "David";
    let surname = "Rodriguez";
    let age = 26;

    objectJSON = {

        "nameMi": nameMi,
        "surname": surname,
        "age": age
    };
}

async function ReadWriterDeleteEnFicheroJSON(nombreFichero) {

    try {
        await fs.writeFile(nombreFichero + ".json", JSON.stringify(objectJSON))
        const nuevaEscritura = await fs.readFile(nombreFichero + ".json", 'utf-8')
        await fs.rm(nombreFichero + ".json")
        console.log(JSON.parse(nuevaEscritura));
    } catch (err) {
        console.log(err);


    }
}

crearDatos();
ReadWriterDeleteEnFicheroJSON("miJSON");