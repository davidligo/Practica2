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

var listaErrores = new Array();


function analidarCaracter(caracter: string): number {
    switch(true){
        case caracter.charAt(0) >= "A" && caracter.charAt(0) <= "Z"||caracter.charAt(0) >= "a" && caracter.charAt(0) <= "z":
            console.log("Es A-Za-z");
            return 1;                       // letras 1
        case caracter.charAt(0) >= "0" && caracter.charAt(0) <= "9":
            console.log("Es Digito");
            return 2;                       // digito 2
        case caracter.charAt(0) == "_":
            console.log("Es guionBajo");
            return 3;                       //  _  3
        case caracter.charAt(0) == "!":
            console.log("Es Not");
            return 4;                       //  !  4
        case caracter.charAt(0) == ">":
            console.log("Es mayor");
            return 5;                       //  >  5
        case caracter.charAt(0) == "<":
            console.log("Es menor");
            return 6;                       //  <  6
        case caracter.charAt(0) == "=":
            console.log("Es igual");
            return 7;                       //  =  7
        case caracter.charAt(0) == "|":
            console.log("Es or");
            return 8;                       //  |  8
        case caracter.charAt(0) == "&":
            console.log("Es and");
            return 9;                       //  &  9
        case caracter.charAt(0) == ":":
            console.log("Es dospuntos");
            return 10;                      //  :  10
        case caracter.charAt(0) == ";":
            console.log("Es puntoycoma");
            return 11;                      //  ;  11
        case caracter.charAt(0) == ",":
            console.log("Es coma");
            return 12;                      //  ,  12
        case caracter.charAt(0) == ".":
            console.log("Es punto");
            return 13;                      //  .  13
        case caracter.charAt(0) == "/":
            console.log("Es dividir");
            return 14;                      //  /  14
        case caracter.charAt(0) == "*":
            console.log("Es asterisco");
            return 15;                      //  *  15
        case caracter.charAt(0) == "(":
            console.log("Es parenIzq");
            return 16;                      //  (  16
        case caracter.charAt(0) == ")":
            console.log("Es parenDer");
            return 17;                      //  )  17
        case caracter.charAt(0) == "{":
            console.log("Es llaveIzq");
            return 18;                      //  {  18
        case caracter.charAt(0) == "}":
            console.log("Es llaveDer");
            return 19;                      //  }  19
        case caracter.charAt(0) == "\"":
            console.log("Es comillaDoble");
            return 20;                      //  "  20
        case caracter.charAt(0) == "'":
            console.log("Es comillaSimple");
            return 21;                      //  '  21
        case caracter.charAt(0) == "+":
            console.log("Es mas");
            return 22;                      //  +  22
        case caracter.charAt(0) == "-":
            console.log("Es menos");
            return 23;                      //  -  23
        case caracter.charAt(0) == " ":
            console.log("Es espacio");
            return 24;                      //  " "  24
        case caracter.charAt(0) == "\n":
            console.log("Es salto Linea");
            return 25;                      //  \n  25
        case caracter.charAt(0) == "\r":
            console.log("Es retorno");
            return 26;                      //  \r  26
        case caracter.charAt(0) == "\t":
            console.log("Es tabulador");
            return 27;                      //  \t  27
        default:
            console.log("Caracter no valido en el lenguaje  "+caracter+"  ;");
            return -1;                      // error -1
    }
    return -1;
};



function verificarEstado0Lexico(estado: number, valor2: string): number {
    var x = analidarCaracter(valor2);
    switch(estado){
        case 1:  // posible id
            if(x==1||x==2||x==3){
                return 1;
            }else{
                return x;
            }            
        case 2:
            if(x==2){
                return 2;
            }else{
                return x;
            }
        case 4:
            if(x==7){
                return 4;
            }else{
                return x;
            }
        case 5:
            if(x==7){
                return 5;
            }else{
                return x;
            }
        case 6:
            if(x==7){
                return 6;
            }else{
                return x;
            }
        case 7:
            if(x==7){
                return 7;
            }else{
                return x;
            }
        case 8:
            if(x==8){
                return 8;
            }else{
                return x;
            }
        case 9:
            if(x==9){
                return 9;
            }else{
                return x;
            }
        case 14:
            if(x==14||x==15){
                return x;
            }else{
                return x;
            }
        case 15:
            if(x==14){
                return 15;
            }else{
                return x;
            }
        case 22:
            if(x==22){
                return 22;
            }else{
                return x;
            }
    }
    return -1;
}

var listaEstadosSintactico = new Array();

function analizarSintactico(): void {

}

function analizar(texto: string): void {
    var posibletoken: string = "";
    var estado: number = 0;
    var x: number = 0;
    var linea: number = 1;
    var columna: number = 1;
    var estadoSintactico: number = 0;

    for(let i = 0; i<texto.length;i++){
        columna++;
        if(estado==0){
            estado = analidarCaracter(texto.charAt(i));
            if(estado==3||estado==-1){
                var errore: error = new error("Lexico", linea, columna, "El carácter "+ texto.charAt(i) + " no pertenece al lenguaje");
                listaErrores.push(errore);
            }else if(estado==10||estado==11||estado==12||estado==13||estado==16||estado==17||estado==18||estado==19||estado==20||estado==21||estado==23||estado==24||estado==26||estado==27){
                //se aceptan solos por lo que regresa al estado 0 del lexico
                //estadoSintactico = 
            }else if(estado==25){
                linea++;
                columna=1;
            }
            posibletoken = "";
            posibletoken = posibletoken + texto.charAt(i);
        }else{
            x = verificarEstado0Lexico(estado, texto.charAt(i));
            if(x==estado){
                posibletoken = posibletoken + texto.charAt(i);
            }else{
                switch(estado){
                    case 1:
                        break;
                    case 2:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                }

            }
        }
        switch(estado){ // posibles estados de token 0 nada 1 posible id
            case 0: // no hay nada 
                
                break;
        }
        texto.charAt(i);
    }
    
}


function hola(): void {
    var txta1:HTMLElement = document.getElementById("txta1") as HTMLElement;
    var txta2:HTMLElement = document.getElementById("txta2") as HTMLElement;
    var h1:HTMLElement = document.getElementById("h1") as HTMLElement;

    // h1.innerText = "asdf";
    //console.log("InnerText: "+txta1.innerText);
    //console.log("Innerhtml: "+txta1.value);
    /*
    var errore: error = new error("Lexico", 1,1,"des");
    listaErrores.push(errore);
    for (var i = 0; i < listaErrores .length; i ++ ){
        console.log(listaErrores[i]);
    }
    */
    
    let te:string = txta1.value;
    analizar(te);
    //console.log("te: "+te);

    txta2.value= te;
}


