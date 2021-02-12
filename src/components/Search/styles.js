import styled from "styled-components";

const SearchWrapper = styled.div`
  margin: 30px;
  line-height: 0;
  display: flex;
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.3);

  input {
    padding: 10px;
    margin: 0;
    border: none;
  }

  button {
    height: 40px;
    padding: 0 10px;
    margin: 0;
    border: none;
    background-color: #6c5b7b;
    color: white;
  }
`;

export default SearchWrapper;
