import imageRickMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);

  //funcion para usar dentro del return
  const reqApi = async () => {
    //funcion encargada de hacer las peticiones a la api (request api reqApi)
    //console.log("haciendo click");
    const api = await fetch("https://rickandmortyapi.com/api/character"); //indicamos la URL de la api a utilizar
    const characterApi = await api.json(); //convierte a json la info de la api
    //console.log(characterApi);

    setCharacters(characterApi.results); //metemos en el characters de arriba todos los resultados de todos los personajes para tratarlos luego.
  };

  //dentro del return se escribe todo lo que va a devolver la aplicacion.
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {/* Con esta linea le pasas los props al componente Characters. Los props son los datos a tratar, en este caso, los nombres de los pj.*/}
        {characters ? ( // operador ternario. Si hay caracteres que mostrar
          <Characters characters={characters} setCharacters={setCharacters}/> //se llama al componente que muestra los pj y se le pasan los pj y se le pasa tambien si hay un pj o no hay un pj mostrado
        ) : ( //en caso contrario se muestran la imagen y el boton de buscar pj. Hay que encapsularlo porque sino da error <> y el </>
          <>
            <img src={imageRickMorty} alt="Rick y morty" className="img-home" />
            <button onClick={reqApi} className="btn-search">
              Buscar personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
