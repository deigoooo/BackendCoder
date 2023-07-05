class TicketManager {
  #precioBaseDeGanancia;
  #id;
  constructor(empresa) {
    this.empresa = empresa;
    this.evento = [];
    this.usuarios = [
      {
        id: 456,
        nombre: "Juan Carlos",
        apellido: "Castro",
        edad: "30",
      },
      {
        id: 789,
        nombre: "Lionel",
        apellido: "Messi",
        edad: "35",
      },
      {
        id: 532,
        nombre: "Diego Armando",
        apellido: "Maradona",
        edad: "50",
      },
      {
        id: 229,
        nombre: "Antonio",
        apellido: "Farias",
        edad: "38",
      },
    ];
    this.#id = 0;
  }
  #idGen = () => {
    this.#id++;
    return this.#id;
  };

  agregarEvento = (nombre, lugar, precio, capacidad, fecha) => {
    const newId = this.#idGen();
    const participantes = [];
    const capacidadR = capacidad || 50;

    const nuevoEvento = {
      id: newId,
      nombre: nombre,
      lugar: lugar,
      precio: precio,
      capacidad: capacidadR,
      participantes: participantes,
    };
    this.evento.push(nuevoEvento);
    console.log(this.evento);
    return nuevoEvento;
  };
  agregarUsuario = (idEvento, idUsuario) => {
    this.evento.forEach((element) => {
      if (element.id === idEvento) {
        const o = this.usuarios.find((usuario) => {
          return usuario.id === idUsuario;
        });
        element.participantes.push(o);
        console.log(this.evento[0].participantes);
      }
    });
  };

  ponerEventoEnGira = (idEvento, nuevaLocalidad, nuevaFecha) => {};
}

const ticketera = new TicketManager();

ticketera.agregarEvento("tini", "estadio de la plata", 50, "09/09/2023", 150);
ticketera.agregarEvento("tini", "estadio de la plata", 50, "09/09/2023", 150);
ticketera.agregarUsuario(1, 456);
