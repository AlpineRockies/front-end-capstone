import styled from 'styled-components';

export const MainRRContent = styled.div`
  background-color: var(--kombu-green);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 960px;
  width: 87vw;
`;

export const LeftContainer = styled.div`
  display: inline-block;
  width: 45%;
  padding: 20px;
`;

export const RightContainer = styled.div`
  display: inline-block;
  width: 45%;
  padding: 10px;
`;

export const StarWrapper = styled.div`
  background-color: var(--kombu-green);
  color: var(--french-bistre);
`;

export const WriteEntryWrapper = styled.div`
  background-color: var(--kombu-green);
  border: 2px solid var(--pullman-brown-ups-brown);
  color: var(--french-bistre);
`;

export const BreakdownWrapper = styled.div`
  background-color: var(--kombu-green);
  border: 2px solid var(--pullman-brown-ups-brown);
  color: var(--french-bistre);
`;

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  /* kombu-green, but 50% opacity */
  background-color: #28361877;
  backdrop-filter: blur(10px);
  z-index: 254;
`;

export const StyledModal = styled.div`
  position: fixed;
  /* top, left, transform: centers the div */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1em;
  border-radius: 8px;
  /* artichoke, but 93% opacity */
  background-color: #939878ee;
  /* kombu-green, but 31% opacity */
  box-shadow: 0 8px 32px 0 #28361850;
  z-index: 255;
`;

const sliderThumbStyles = (props) => `
  width: 25px;
  height: 25px;
  background: #866c46ff;
  cursor: pointer;
  outline: 5px solid #333;
  -webkit-transition: .2s;
  transition: opacity .2s;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  color: #d8cba7ff;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .value {
    font-size: 2rem;
  }
  .slider {
    -webkit-appearance: none;
    width: 25%;
    height: 5px;
    background: #d8cba7ff;
    outline: none;
  }
`;

export const CloseButton = styled.button`
  width: fit-content;
  position: relative;
  justify-self: end;
  background: none;
  border: none;

  &:hover {
    text-shadow: 0 0 1px #00000077;
  }
`;

export const StyledButton = styled.button`
  border: 2px solid var(--pullman-brown-ups-brown);
  color: var(--dutch-white);
  background-color: var(--french-bistre);
  text-transform: capitalize;
  cursor: pointer;
  min-width: 200px;
  padding: 1em;
  margin-right: 1rem;
`;

export const PhotoWrapper = styled.div`
  display: inline-block;
  float: left;
  margin-right: 5px;
`;

export const ThumbnailImg = styled.img`
  object-fit: contain;
  width: 90px;
  height: 60px;
  margin-right: 1em;
  border: 2px solid var(--kombu-green);
  background-color: var(--artichoke);
`;

export const ExpandImg = styled.img`
  max-width: 75vw;
  max-height: 75vh;
  object-fit: cover;
`;
