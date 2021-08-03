function crearDatos(nombreFichero) {
    let readLine = require('readline');
    let rl = readLine.createInterface({

        input: process.stdin,
        output: process.stdout
    });

    let nombre = "";
    let apellido = "";
    let edad = "";

    rl.question('Escribe nombre: ', (answer1) => {
        nombre = answer1;
        rl.question('Escribe apellido: ', (answer2) => {
            apellido = answer2;
            rl.question('Escribe edad: ', (answer3) => {
                edad = answer3;
                let objectJSON = { "name": nombre, "surname": apellido, "age": edad };
                escribirEnFicheroJSON(nombreFichero, objectJSON);
                leerEnFicheroJSON(nombreFichero);
                borrarEnFicheroJSON(nombreFichero);
                rl.close();
            });
        });
    });

}

function escribirEnFicheroJSON(nombreFichero, objectJSON) {
    data = JSON.stringify(objectJSON);

    fs.writeFile(nombreFichero + ".json", data, (err) => {
        if (err) {
            console.log(err);
        }

    })
};

function leerEnFicheroJSON(nombreFichero) {
    fs.readFile(nombreFichero + ".json", (err, data) => {
        if (err) return err;
        let per = JSON.parse(data);
        console.log(per);

    }

    )
};

function borrarEnFicheroJSON(nombreFichero) {

    fs.rm(nombreFichero + ".json", (err, data) => {
        if (err) {
            console.log(err);
        }
    }
    );
}

crearDatos("myJSON");
