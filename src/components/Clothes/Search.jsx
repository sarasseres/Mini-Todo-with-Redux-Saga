const Search = (props) => {
  return (
    <div className="row justify-content-center m-0">
      <div className="col-lg-8 col-sm-10 p-0">
        <div className="input-group mt-5 mx-auto">
          <input
            type="text"
            className="form-control search-input rounded-0 text-primary2 text-center shadow-none"
            placeholder="Search Cloth"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(e) => props.onChange(e.target.value)}
          />
          {/* <button
            className="btn btn-outline-secondary rounded-0 fw-medium search-btn"
            type="button"
            id="button-addon2"
          >
            Search
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
