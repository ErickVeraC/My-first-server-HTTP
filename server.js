const http = require("http");

const students = ["Adolfo", "Alejandra", "Andrea"];

// El primer parametro que recibe es un request y el segundo es un response
const server = http.createServer((request, response) => {
  const { method, url } = request;
  console.log(`${method} ${url}`);
  //Servicio para administrar una lista de estudiantes
  //Mostar la lista de estudiantes
  if (method === "GET" && url === "/students") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(students));
    response.end();
  }
  //Agregar un estudiante
  if (method === "POST" && url === "/students") {
    const newStudent = "El nuevo estudiante";
    students.push(newStudent);
    response.writeHead(201, { "Content-Type": "application/json" });
    response.write(JSON.stringify(students));
    response.end();
  }
  //Eliminar un estudiante
  //Reset de la lista de estudiantes

  /* console.log("Request received, thanks!"); // El servidor recibe una petición

  console.log("request:", request.method);
  console.log("url:", request.url); // Con esto se obtiene la url de la petición y al mismo tiempo una url puede tener multiples rutas y multiples parametros
  if (request.method === "GET") {
    response.end("GET request received");
  } else if (request.method === "POST") {
    response.end("POST request received");
  } else {
    response.end("Request other method received");
  }
    */

  /*
  const obj = {
    message: "Oups! Something went wrong",
  };

  response.writeHead(400, {
    // Con esto se responde con un status code 400 o dependiendo del que se quiera
    // De esta forma respondemos con los dos elementos necesarios headers y body
    "Content-Type": "application/json",
    "x-powered-by": "Erick", // Se pueden poner headers personalizados
  });
  response.write(JSON.stringify(obj)); // Con esto se escribe la respuesta en el body y se convierte a string ya que un objeto no se puede enviar como respuesta
  response.end(); // Con esto se termina la respuesta, es necesario para que el servidor sepa que ya terminó de responder
  */
});

// El servidor escucha en el puerto 8080, es para avisarle al servidor que escuche en el puerto 8080
server.listen(8080, () => {
  console.log("Server started on http://localhost:8080");
});
