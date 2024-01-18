//aqui vamos a tener toda la info que viene de la API

export default function Characters(props) {
    const { characters, setCharacters } = props; // añades los caracteres que se pasan en la app principal mediante los props a la nueva constante characters

    const resetCharacters = () => {
      setCharacters(null); // se pone setCharacters a null para que elimine los personajes requestados, y por tanto cambie el estado y vuelva a la pag principal.
    }

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>Volver a la página principal.</span>

      <div className="container-characters">
        { //aqui vamos a recorrer la constante characters para sacar la informacion de los pj
          // usamos map mapa recorrer la info y extraeremos el pj y el índice del pj
          characters.map((character, index) => (  // este parentesis aqui indica un return implicito. Es como un return normal pero como estamos dentro de uno para no repetir.
            <div className="character-container" key={index}>
              <div>
                <img src={character.image} alt={character.name}/>
              </div>
              <div>
                <h3>{character.name}</h3>
                <h6>{character.status === "Alive" ? (
                  <>
                  <span className="alive"/>
                  Alive
                  </>
                ):(
                  <>
                  <span className="dead"/>
                  Dead
                  </>
                )}</h6>
                {/* En el parrafo se ponen la cantidad de episodios en los que aparece, como se muestra un array de episodios, buscamos el tamaño del array pa saber en cuantos episodios aparece */}
                <p>
                  <span className="text-grey">Episodios: </span>
                  <span>{character.episode.length}</span>
                </p>
                <p>
                  <span className="text-grey">Especie: </span>
                  <span>{character.species}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>Volver a la página principal.</span>
    </div>
  )
}
