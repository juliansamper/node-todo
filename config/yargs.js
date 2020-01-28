const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command("crear", "Crear por hacer", { descripcion })
    .command("listar", "Mostrar todas las tareas por hacer", {})
    .command("actualizar", "Actualiza una tarea por hacer", {
        descripcion,
        completado
    })
    .command("borrar", "Borrar por hacer", {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}