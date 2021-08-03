    let readLine = require('readline');
    const fs = require('fs');
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


                data = JSON.stringify(objectJSON);

                fs.writeFile("myJSON.json", data, (err) => {
                    if (err) {
                        console.log(err);
                    }

                });
                fs.readFile("myJSON.json", (err, data) => {
                    if (err) return err;
                    let per = JSON.parse(data);
                    console.log(per);

                });
                fs.rm("myJSON.json", (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                });

                rl.close();
            });
        });
    });
