import { GET_CHARACTERS } from "./queries";
import { useQuery } from "@apollo/client/react";
import { useState } from "react";
// import { useMutation } from "@apollo/client/react";
// import { ADD_FAVOURITE } from "./mutations";

function App() {
  const { data, loading, error, refetch } = useQuery(GET_CHARACTERS);
  // const [
  //   addFavourite,
  //   { data: mutationData, loading: mutationLoading, error: mutationError },
  // ] = useMutation(ADD_FAVOURITE);

  const [selectedCharacter, setSelectedCharacter] = useState("");
  const [note, setNote] = useState("");
  const [favorites, setFavorites] = useState([]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const characters = data.characters.results;
  const character = characters.find((char) => char.id === selectedCharacter);
  const episodes = character?.episode;
  console.log(data);
  console.log(note);

  const handleAddFavourite = async () => {
    if (!character || !note) return;

    // try {
    //   await addFavourite({
    //     variables: {
    //       characterId: character.id,
    //       note,
    //     },
    //   });
    // } catch (error) {
    //   console.error(error);
    // }

    setFavorites([
      ...favorites,
      { characterID: character.id, characterName: character.name, note },
    ]);
    setNote("");
  };
  return (
    <>
      <div>
        <h2>Characters</h2>
        <div>
          <p>{character?.name}</p>
          <ol>
            {episodes && episodes.map((ep) => <li key={ep.id}>{ep.name}</li>)}
          </ol>
        </div>

        <h2>Add Note / Favorite</h2>

        <select
          value={selectedCharacter}
          onChange={(e) => {
            setSelectedCharacter(e.target.value);
          }}
        >
          <option value="">Select character</option>
          {characters.map((char) => (
            <option key={char.id} value={char.id}>
              {char.name}
            </option>
          ))}
        </select>

        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Your note"
        />

        <button onClick={handleAddFavourite}>Add</button>

        <h2>Favorites</h2>
        {favorites.map((char, index) => (
          <p key={index}>
            {char.characterName}: {char.note}
          </p>
        ))}

        <button onClick={() => refetch()}>Refetch Characters</button>
      </div>
    </>
  );
}

export default App;
