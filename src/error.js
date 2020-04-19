"use strict";
var error = /** @class */ (function () {
    function error(tipo, linea, columna, descripcion) {
        this.tipo = tipo;
        this.linea = linea;
        this.columna = columna;
        this.descripcion = descripcion;
    }
    error.prototype.getTipo = function () {
        return this.tipo;
    };
    error.prototype.getLinea = function () {
        return this.tipo;
    };
    error.prototype.getColumna = function () {
        return this.tipo;
    };
    error.prototype.getDescripcion = function () {
        return this.tipo;
    };
    return error;
}());
module.exports = error;
