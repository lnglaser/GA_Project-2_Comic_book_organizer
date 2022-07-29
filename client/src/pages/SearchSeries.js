//First additional feature to be added

const SearchSeries = () => {
  return (
    <div className="SearchSeries">
      <p>Search for series</p>
      <form>
        <input
          type="text"
          name="search"
          placeholder="Search comic series"
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default SearchSeries;
