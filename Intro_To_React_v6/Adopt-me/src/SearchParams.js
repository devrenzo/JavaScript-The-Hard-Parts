import { useState, useEffect, useContext } from "react";

import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";
import Pagination from "./Pagination";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  // RENDER STATES
  const [pets, setPets] = useState([]);
  const [cache, setCache] = useState([]);
  const [breedList] = useBreedList(animal);
  // THEME
  const [theme, setTheme] = useContext(ThemeContext);
  const themeList = ["darkblue", "pink", "black"];
  // PAGINATION
  const [page, setPage] = useState({ num: 0, hasNext: true });

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const requestPets = async () => {
    console.log(page.num);

    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}&page=${page.num}`
    );

    const body = await res.json();

    console.log("REQUEST");

    console.log(body);

    setPets(body.pets);
    setPage({ ...page, hasNext: body.hasNext });
    setCache(body.pets);
  };

  const handleInput = ({ target }) => {
    setLocation(target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    requestPets();
  };

  const handleSearch = (params) => {
    const hasAnimals = [...pets].filter(({ animal }) => animal === params.toLowerCase());

    if (!hasAnimals.length) {
      setCache(pets);
      return;
    }

    setCache(hasAnimals);

    console.log({ cache });
  };

  const handlePagination = async ({ target }) => {
    const { id } = target;

    if (id === "next" && page.hasNext) {
      setPage({ ...page, num: page.num++ });
      console.log(page.num);
      await requestPets();
      return;
    }

    if (id === "prev") {
      setPage({ ...page, num: page.num-- });
      await requestPets();
      return;
    }

    console.log({ page });
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

      {/* NAVBAR */}

      <Navbar handleSearch={handleSearch} />

      {/* RESULTS */}

      <Results pets={cache.length > 0 ? cache : pets} />

      {/* PAGINATION  */}

      <Pagination onClick={handlePagination} currentPage={page.num} />
    </div>
  );
};

export default SearchParams;
