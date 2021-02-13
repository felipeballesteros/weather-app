import styled from "styled-components";

const MainWrapper = styled.div`
  margin: 0;
  padding: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  flex-direction: column;
  height: 100%;
  background-color: #f8b195;
  background-image: linear-gradient(
    #f8b195 0%,
    #f67280 24%,
    #c06c84 49%,
    #6c5b7b 75%,
    #355c7d 100%
  );
`;

const WidgetContainer = styled.div`
  width: 400px;
  min-width: 200px;
  max-height: 900px;
  border-radius: 5px;
  overflow: hidden;
  -webkit-box-shadow: 0px 1px 30px 15px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 30px 15px rgba(0, 0, 0, 0.3);

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
`;

const Loader = styled.div`
  width: 200px;
  height: 200px;
  background-color: skyblue;
  border-radius: 50%;
  position: relative;
  box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.5),
    0 4px 10px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;

  :before,
  :after {
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    top: -100px;
    background-color: #fff;
  }
  :before {
    border-radius: 45%;
    background: rgba(255, 255, 255, 0.7);
    animation: wave 5s linear infinite;
  }
  :after {
    border-radius: 35%;
    background: rgba(255, 255, 255, 0.3);
    animation: wave 5s linear infinite;
  }
  @keyframes wave {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export {MainWrapper, WidgetContainer, Loader};
