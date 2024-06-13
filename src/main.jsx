import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
//Nuevas dependencias
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "font-awesome/css/font-awesome.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ! PROMESAS

/*
Promesas simples

const generarInforme = ()=>{
  return new Promise (()=>{
    PEDIDO DE INFORME - Fetch
    
    setTimeout(()=>{
      if(informe)
       resolve("Recibimos el pedido")
      }else{
      reject("Error");
    }, 2000);    
    });
  
  }
*/
/*
fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=a7fc87f5b94b227523a49f35835492c1")
*/

// //!Promesa simple
// const obtenerClima = () => {
//   return new Promise((resolve, reject) => {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=a7fc87f5b94b227523a49f35835492c1"
//     )
//       .then((response) => {
//         if (!response.ok) {
//           reject(new Error("Error en el pedido!"));
//         }
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// obtenerClima()
//   .then((data) => console.log("Datos recibidos:", data))
//   .catch((error) =>
//     console.error("Hubo un problema con la petición fetch:", error)
//   );
// /*finally*/

// //!ASYNC/AWAIT
// const obtenerClimaAsync = async () => {
//   const resp = await fetch(
//     "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=a7fc87f5b94b227523a49f35835492c1"
//   );
//   const data = await resp.json();
//   return data;
// };

// obtenerClimaAsync()
//   .then((respuesta) => console.log(respuesta))
//   .catch((error) => console.log(error));

// //! clima Api
// const clima = () => {
//   navigator.geolocation.getCurrentPosition((pos) => {
//     const coords = pos.coords;
//     const lat = coords.latitude;
//     const long = coords.longitude;

//     // console.log(coords);

//     obtenerClima(lat, long)
//       .then((respuesta) => console.log(respuesta))
//       .catch((error) => console.log(error));
//   });
// };

// const obtenerClima = async (lat, long) => {
//   const resp = await fetch(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=a7fc87f5b94b227523a49f35835492c1`
//   );
//   const data = await resp.json();
//   return data;
// };

// clima();
