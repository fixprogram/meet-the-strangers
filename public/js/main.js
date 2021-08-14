const socket = io("/");

socket.on("connect", () => {
  console.log("successfuly connected to socket.io server");
  console.log(socket.id);
});
