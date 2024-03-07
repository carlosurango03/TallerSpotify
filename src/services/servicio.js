// CONSUMIENTO APIS

//1.  Declarar una variable para almacenar la url del api 
let url="https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x/top-tracks?market=us"

//2.  Almacenar en una variable o en varias variables datos de control que se necesiten en el api
let token="Bearer BQCO_boSaBwzx3oy65teOA81sBwExxXKgmcqoQUrFe3RtZTP_QDNITSrS8f4yp11vKnh_24vy-PT749IIuxTqMZj1WCxcWDJwBUfGzHuXwdjSmssVuc"

//3.  Contruir la peticion que se va a enviar
let peticion={
     method:"GET",
     headers :{
        Authorization:token
     }   
}

//4.  Ejecutar el consumo del API
fetch(url,peticion)
.then(function(){})
.then(function(){})
.catch(function(){})