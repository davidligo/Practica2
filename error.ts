class error{
    tipo: string;
    linea: number;
    columna: number;
    descripcion: string;
    constructor(tipo: string, linea: number, columna: number, descripcion: string){
        this.tipo = tipo;
        this.linea = linea;
        this.columna = columna;
        this.descripcion = descripcion;
    }
    getTipo(){
        return this.tipo;
    }
    getLinea(){
        return this.tipo;
    }
    getColumna(){
        return this.tipo;
    }
    getDescripcion(){
        return this.tipo;
    }

}

export = error;