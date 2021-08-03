
let objectJSON = {};
const fs = require('fs');

let nameMi = "David";
let surname = "Rodriguez";
let age = 26;

objectJSON = {

    "nameMi": nameMi,
    "surname": surname,
    "age": age
};


data = JSON.stringify(objectJSON);
fs.writeFile("miJSON.json", data, (err) => {

    fs.readFile("miJSON.json", (err, data) => {
        if (err) return err;
        let per = JSON.parse(data);
        console.log(per);
    })

});

/*
    fs.readFile("miJSON.json", (err, data) => {
        if (err) return err;
            let per = JSON.parse(data);
            console.log(per);
    })



    fs.rm("miJSON.json", (err, data) => {
        if (err) {
            console.log(err);
        }
    }
    );


*/