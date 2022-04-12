import styled from 'styled-components';

export const MainRRContent = styled.div`
  background-color: var(--ebony);
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 960px;
  width: 87vw;
  display: inline-block;
`;

export const LeftContainer = styled.div`
  display: inline-block;
  width: 45%;
  padding: 20px;
  vertical-align: top;
`;

export const RightContainer = styled.div`
  display: inline-block;
  width: 45%;
  padding: 10px;
  vertical-align: top;
`;

export const WriteEntryWrapper = styled.div`
  background-color: var(--ebony);
  border: 2px solid var(--pullman-brown-ups-brown);
`;

export const BreakdownCharacter = styled.div`
  display: inline;
  float: left;
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
  /* artichoke, but 93% opacity */
  background-color: #939878ee;
  /* kombu-green, but 31% opacity */
  box-shadow: 0 8px 32px 0 #28361850;
  z-index: 255;
`;

const sliderThumbStyles = (props) => (`
  width: 5px;
  height: 5px;
  background: var(--dutch-white);
  cursor: pointer;
  border-radius: 3px;
  outline: 3px solid var(--dutch-white);
`);

export const Range = styled.div`
  display: inline;
  align-items: center;
  color: #888;
  margin-top: 2rem;
  margin-bottom: 2rem;
  .value {
    flex: 1;
    font-size: 2rem;
  }
  .slider {
    -webkit-appearance: none;
    border-radius: 5px;
    background: var(--french-bistre);
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

export const CloseButton = styled.button`
  width: fit-content;
  position: relative;
  justify-self: end;
  background: none;
  border: none;
  --cafe-noir &:hover {
    text-shadow: 0 0 1px #00000077;
  }
`;

export const StyledButton = styled.button`
  border: 2px solid var(--pullman-brown-ups-brow);
  background-color: var(--dutch-white);
  text-transform: capitalize;
  cursor: pointer;
  min-width: 200px;
  padding: 1em;
`;

export const PhotoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const ThumbnailImg = styled.img`
  object-fit: contain;
  width: 90px;
  height: 60px;
  border: 2px solid var(--kombu-green);
  background-color: var(--artichoke);
`;

export const ExpandImg = styled.img`
  max-width: 75vw;
  max-height: 75vh;
  object-fit: cover;
`;

export const Select = styled.select`
  width: 40%;
  height: 30px;
  background: var(--ebony);
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid;
  margin-left: 10px;
  option {
    background: var(--kombu-green);
    display: inline;
    white-space: pre;
    min-height: 20px;
  }
`;
