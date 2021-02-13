import styled from "styled-components";

const SearchWrapper = styled.div`
  margin: 30px;
  line-height: 0;
  display: flex;
  border-radius: 3px;
  overflow: hidden;
  -webkit-box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.3);

  opacity: 1;
  animation: fade 0.5s linear;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  form {
    display: flex;
  }

  input[type="text"] {
    padding: 10px;
    margin: 0;
    border: none;
  }

  input[type="submit"] {
    height: 40px;
    padding: 0 10px;
    margin: 0;
    border: none;
    background-color: #6c5b7b;
    color: white;
  }
`;

export default SearchWrapper;
