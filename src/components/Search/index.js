import React, {useRef} from "react";
import SearchWrapper from "./styles";

const Search = props => {
  const textInput = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    props.locationChange(textInput.current.value);
  };

  return (
    <SearchWrapper>
      <form onSubmit={handleSubmit}>
        <input ref={textInput} type="text" defaultChecked="Location" />
        <input type="Submit" value="Search" readOnly />
      </form>
    </SearchWrapper>
  );
};

export default Search;
