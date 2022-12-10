import { createServer } from "http";

const server = createServer((req, res) => {
  const url = req.url;

  //   if (url === "/") {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.write("<h2>INDEX SAYFASI</h2>");
  //   } else if (url === "/about") {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.write("<h2>HAKKIMDA SAYFASI</h2>");
  //   } else if (url === "/contact") {
  //     res.writeHead(200, { "Content-Type": "text/html" });
  //     res.write("<h2>İLETİŞİM SAYFASI</h2>");
  //   } else {
  //     res.writeHead(404, { "Content-Type": "text/html" });
  //     res.write("<h2>404 SAYFA BULUNAMADI</h2>");
  //   }

  //   res.end();
  // ;

//switch-case

  switch (url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>INDEX SAYFASI</h2>");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>HAKKIMDA SAYFASI</h2>");
      break;
    case "/contact":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>İLETİSİM SAYFASI</h2>");
      break;

    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h2>404 SAYFA BULUNAMADI</h2>");
      break;
  }
  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});
