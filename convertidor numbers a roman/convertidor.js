//para convertir números naturales en números romanos
//la opción mas cómoda es usar la programación orientada a objetos

function convertToRoman(num) {
    //se crea un objeto con las letras y valores de esta
    const conver = {
        M:1000,
        CM:900,
        D:500,
        CD:400,
        C:100,
        XC:90,
        L:50,
        XL:40,
        X:10,
        IX:9,
        V:5,
        IV:4,
        I:1
    }
    //se crea una variable vacía para los números romanos
    let roman = ''
    //bucle for el cual recorre todas las características del objeto CONVER
    for(i in conver){
        //bucle while que se repite mientras el NUM dado por el usuario sea mayor o igual a cualquiera de
        //las propiedades dentro del objeto CONVER
        while(num>=conver[i]){
            //a roman se le suma el símbolo que necesite
            roman += i
            //a num se le resta la cantidad que se le agrego a roman para poder seguir con el bucle
            num -= conver[i]
        }
    }
    return roman
}

convertToRoman(2);