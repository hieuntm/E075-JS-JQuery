if (method === "POST" && (url === "/signup" || url === "/register")) {
  console.log("Dang ky tai khoan");
  res.end();
}

if (method === "GET" && (url === "/signup" || url === "/register")) {
  res.setHeader("Content-Type", "text/html");

  res.write("<html>");
  res.write("<header>");
  res.write("<h1>Create account</h1>");
  res.write("</header>");
  res.write("<body>");
  res.write("<form action='/signup' method='POST'>");
  res.write("<p>Username: </p>");
  res.write('<input type="text"/>');
  res.write("<p>Password: </p>");
  res.write('<input type="text"/>');
  res.write('<button type="submit">Register</button>');
  res.write("</form>");
  res.write("</body>");
  res.write("</html>");
  res.end();
}

res.writeHead(200, { "Content-Type": "application/json" });
res.end(
  JSON.stringify({
    data: "Hello World!",
  })
);
