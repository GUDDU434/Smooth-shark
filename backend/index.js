const { connection } = require("./src/database/db");
const userRouter = require("./src/userRouter/userRouter");
const messageRoutes = require("./src/userRouter/messages");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");



const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/user", userRouter);
app.use("/messages", messageRoutes);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("Running");
});
global.onlineUsers = new Map();
io.on("connection", (socket) => {
  socket.emit("me", socket.id);

  socket.on("disconnect", () => {
    socket.broadcast.emit("callEnded");
  });

  socket.on("callUser", ({ userToCall, signalData, from, name }) => {
    io.to(userToCall).emit("callUser", { signal: signalData, from, name });
  });

  socket.on("answerCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });

  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.msg);
    }
  });
});

server.listen(PORT, async () => {
  await connection;
  console.log(`Server is running on port ${PORT}`);
});
