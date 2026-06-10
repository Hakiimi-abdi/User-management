const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = router.db.get("users").value();

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    res.json({ accessToken: "mock-jwt-token-123", user });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

server.use(router);
server.listen(8000, () => console.log("🚀 Server is running!"));
