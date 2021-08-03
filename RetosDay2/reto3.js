const readline = require('readline');
const fs = require('fs/promises');
const { resolve } = require('path');


let objectJSON = {};

let nameMi = "";
let surname = "";
let age = "";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function pregunta(pregunta){
    const question = new Promise((resolve,rejects)=>{
        rl.question(pregunta,(respuesta)=>{resolve(respuesta)})
    })
    return question;
}
async function questionDatos(){
    try{

        let namePregunta =await pregunta("Cual es el nombre? ")
        nameMi = namePregunta;
        let apellidoPregunta =await pregunta("Cual es el apellido? ")
        surname = apellidoPregunta;
        let edadPregunta = await pregunta("Cual es la edad? ")
        age = edadPregunta;
        objectJSON = {

            "nameMi": nameMi,
            "surname": surname,
            "age": age
        };
        rl.close();
        ReadWriterDeleteEnFicheroJSON("miJSON");
    }catch (err) {
        console.log(err);

    }
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

questionDatos();