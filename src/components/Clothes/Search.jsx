const Search = (props) => {
  return (
    <div className="text-center">
      <div className="input-group mt-5 w-50 mx-auto">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search Product"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => props.onChange(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary search-btn"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
