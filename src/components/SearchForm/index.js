const SearchForm = (props) => {
  return (
    <div>
      <form>
        <div>
          <input placeholder={props.placeholder}></input>
        </div>
        <div>
          <button>{props.btnLabel}</button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
