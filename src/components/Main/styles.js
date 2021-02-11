import styled from "styled-components";

const MainWrapper = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f8b195;
  background-image: linear-gradient(
    180deg,
    #f8b195 0%,
    #f67280 24%,
    #c06c84 49%,
    #6c5b7b 75%,
    #355c7d 100%
  );
`;

const WidgetContainer = styled.div`
  width: 400px;
  max-height: 900px;
  margin: 2rem auto;
  border-radius: 5px;
  overflow: hidden;
  -webkit-box-shadow: 0px 1px 30px 15px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 30px 15px rgba(0, 0, 0, 0.3);
`;

export {MainWrapper, WidgetContainer};
