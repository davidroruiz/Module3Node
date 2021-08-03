const readline = require('readline');
const fs = require('fs/promises');

let objectJSON = {};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question() {
    const question = new Promise((resolve) => {
        rl.question('Cual es tu nombre? ', (nameMi) => {
            resolve(nameMi)
            rl.question('Cual es tu apellido? ', (apellidoMi) => {
                resolve(apellidoMi)
                rl.question('Cual es tu edad? ', (edadMi) => {
                    resolve(edadMi)
                    objectJSON = { "name": nameMi, "surname": apellidoMi, "age": edadMi };
                    ReadWriterDeleteEnFicheroJSON("miJSON");

                    rl.close();
                });
            });

        });
    })

    return question;
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

question();