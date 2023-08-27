const socketClient = io();
let chatBox = document.getElementById("chatBox");
let usuarioId = document.getElementById("idUsuario");

chatBox.addEventListener("keyup", (evt) => {
  if (evt.key === "Enter") {
    socketClient.emit("message", chatBox.value);
  }
});
socketClient.on("userid", (data) => {
  usuarioId.innerHTML = `Usuario: ${data}`;
});
socketClient.on("history", (data) => {
  let history = document.getElementById("history");

  let messages = "";
  data.forEach((message) => {
    // messages += `${message}<br>`
    messages += `${message.userId} dice: ${message.message}<br>`;
  });
  history.innerHTML = messages;
  chatBox.value = "";
});
