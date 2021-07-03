const Navbar = ({ handleSearch }) => {
  return (
    <nav>
      <label htmlFor="search">
        <input
          onInput={({ target }) => handleSearch(target.value)}
          onBlur={({ target }) => handleSearch(target.value)}
          type="text"
          id="search"
          placeholder="Search for a particular pet"
        />
      </label>
    </nav>
  );
};

export default Navbar;
