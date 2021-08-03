
let objectJSON = {};
const fs = require('fs');

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

function escribirEnFicheroJSON(nombreFichero) {
    data = JSON.stringify(objectJSON);
    fs.writeFile(nombreFichero, data, (err) => {
        if (err) {
            console.log(err);
        }

    })
};

function leerEnFicheroJSON(nombreFichero) {
    fs.readFile(nombreFichero, (err, data) => {
        if (err) return err;
            let per = JSON.parse(data);
            console.log(per);      
    })

};

function borrarEnFicheroJSON(nombreFichero) {
    fs.rm(nombreFichero, (err, data) => {
        if (err) {
            console.log(err);
        }
    }
    )
}

crearDatos();
escribirEnFicheroJSON("miJSON.json");
leerEnFicheroJSON("miJSON.json");
borrarEnFicheroJSON("miJSON.json")