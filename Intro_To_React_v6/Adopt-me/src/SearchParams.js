import { useState, useEffect, useContext } from "react";

import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breedList] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);
  const themeList = ["darkblue", "pink", "black"];

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const requestPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const body = await res.json();
    console.log(body);
    setPets(body.pets);
  };

  const handleInput = ({ target }) => {
    setLocation(target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    requestPets();
  };

  return (
    <div className="search-params">
      <form style={{ backgroundColor: theme }} onSubmit={handleForm}>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            placeholder="Location"
            value={location}
            onChange={handleInput}
          />
        </label>

        {/* ANIMAL SELECT */}

        <label htmlFor="animal">
          Animal
          <select
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
            id="animal"
          >
            <option value="">--Please choose an Animal--</option>

            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        {/* BREEDS SELECTION */}

        <label htmlFor="breed">
          Breed
          <select
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            id="breed"
          >
            <option value="">--Please choose a breed--</option>
            {breedList.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        {/* THEME SELECTION */}

        <label htmlFor="theme">
          theme
          <select
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
            id="theme"
          >
            <option value="">--Please choose a theme--</option>
            {themeList.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
          </select>
        </label>

        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>

      {/* RESULTS */}

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
