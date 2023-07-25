class TicketManager {
  #_events;
  constructor() {
    this.#_events = [];
  }
  get events() {
    return this.#_events;
  }
  set events(event) {
    event.id = this.#getNextID();
    this.#_events.push(event);
  }
  #getNextID() {
    if (this.#_events.length === 0) return 1;
    return this.#_events[this.#_events.length - 1].id + 1;
  }
}

const ticketera = new TicketManager();

ticketera.events = {
  artist: "tini",
  city: "estadio de la plata",
  price: 50,
  capacity: 1500,
};
ticketera.events = {
  artist: "Lionel Messi",
  city: "Velez",
  price: 50,
  capacity: 1500,
};
console.log(ticketera.events);
