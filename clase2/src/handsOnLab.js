class TicketManager{
    #precioBaseDeGanancia
    #id
    constructor(empresa){
        this.empresa = empresa;
        this.evento = [];
        this.#id =0;

    }
    #idGen= ()=>{
        this.#id++; 
        return this.#id;
    }

    agregarEvento=(nombre,lugar,precio,capacidad,fecha)=>{
        const newId = this.#idGen();
        const participantes=[];
        const capacidadR= capacidad || 50;

        const nuevoEvento = {
            id:newId,
            nombre:nombre,
            lugar:lugar,
            precio:precio,
            capacidad:capacidadR,
            participantes:participantes
        };
        this.evento.push(nuevoEvento);
        console.log(this.evento);

    }
    agregarUsuario=(idEvento,idUsuario)=>{

    }
    ponerEventoEnGira=(idEvento,nuevaLocalidad,nuevaFecha)=>{
        
    }
}

const ticketera = new TicketManager();

ticketera.agregarEvento("tini", "estadio de la plata",50, "09/09/2023", 150);
ticketera.agregarEvento("tini", "estadio de la plata",50, "09/09/2023", 150);