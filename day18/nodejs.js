const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  const method = req.method;
  const url = req.url;
  console.log(method, url);

  if (method === "GET" && url === "/") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<header>");
    res.write("<h1>Hello nodejs server </h1>");
    res.write("<p>Helo ABCCC</p>");
    res.write("<p>Helo ABCCC 12312</p>");

    res.write("</header>");
    res.write("</html>");
    res.end();
  }

  if (method === "GET" && url === "/admin") {
    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<header>");
    res.write("<h1>Hello nodejs server admin </h1>");
    res.write("</header>");
    res.write("</html>");
    res.end();
  }

  if (method === "GET" && url === "/books") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: [
          {
            name: "Dark nhan tam",
            price: 30,
          },
        ],
      })
    );
  }
});

console.log("Server is running");
server.listen(80);

// ExpressJS => Framework của JS dùng để làm server
// NodeJS
