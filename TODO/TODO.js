const fs = require('fs');

let listTODO = [];

const guardarDB = () => {
    let data = JSON.stringify(listTODO);

    fs.writeFile('DB/data.json', data, (err) => {
        if (err)
            throw new Error('Error al grabar el archivo', err);
    });
};

const cargarDB = () => {
    try {
        listTODO = require('../DB/data.json');
    } catch (error) {
        listTODO = []
    }
};

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listTODO.push(porHacer);

    guardarDB();

    return porHacer;
};

const getListado = () => {
    cargarDB();
    return listTODO;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listTODO.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listTODO[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    try {
        cargarDB();
        let newlistTODO = listTODO.filter(tarea => tarea.descripcion != descripcion);
        if (newlistTODO.length != listTODO.length) {
            listTODO = newlistTODO;
            guardarDB();
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};