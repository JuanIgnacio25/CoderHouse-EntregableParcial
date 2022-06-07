const fs = require('fs');

const checkFile = async (nombreArchivo) => {
    const stats = fs.existsSync(nombreArchivo);

    if (stats == false) {
        try {
            await fs.promises.writeFile(nombreArchivo, "[]");
        } catch (error) {
            throw error;
        }
    }
}

class Contenedor {

    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    };

    async getAllId(id) {
        try {
            if(id > 0){
                console.log(id);
                await checkFile(this.nombreArchivo);
                let array = JSON.parse(await fs.promises.readFile(this.nombreArchivo));
    
                array = array.filter((x) => {
                    return x.id == id;
                });
    
                return array[0];
            }else if(id == 0){
                console.log(id);
                await checkFile(this.nombreArchivo);
                const contenidoJson = JSON.parse(await fs.promises.readFile(this.nombreArchivo));
                return contenidoJson;
            }

        } catch (error) {
            throw error;
            return "[]";
        }

    }
};
module.exports = Contenedor;