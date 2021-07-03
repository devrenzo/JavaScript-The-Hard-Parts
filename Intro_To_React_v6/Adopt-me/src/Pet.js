import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, city, state, id }) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";

  if (images.length) {
    [hero] = images;
  }

  const location = `${city} ${state}`;
  animal = `${animal.charAt(0).toUpperCase()}${animal.slice(1)}`;

  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h3>
          {animal} - {breed} - {location}
        </h3>
      </div>
    </Link>
  );
};

export default Pet;
