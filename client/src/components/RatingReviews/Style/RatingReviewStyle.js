import styled from 'styled-components';

export const StyledMain = styled.div`
  background-color: #f5f5f5;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  max-width: 960px;
  width: 100%;
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

export const ReviewWrapper = styled.div`
  border-bottom: 2px solid var(--kombu-green);
`;

export const CharacterWrapper = styled.div`
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

export const StyledWriteModal = styled(StyledModal)`
  width: 700px;
  color: var(--cafe-noir);
`;

const sliderThumbStyles = (props) => `
  width: 5px;
  height: 5px;
  background: var(--kombu-green);
  cursor: pointer;
  border-radius: 3px;
  outline: 3px solid var(--kombu-green);
`;

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
      ${(props) => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${(props) => sliderThumbStyles(props)}
    }
  }
`;

export const StyledCloseButton = styled.button`
  vertical-align: top;
  float: right;
  position: relative;
  justify-self: end;
  background: none;
`;

export const PhotoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const ThumbnailImg = styled.img`f
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

export const SelectWrapper = styled.select`
  width: 40%;
  height: 30px;
  background: #f5f5f5;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid;
  margin-left: 10px;
  option {
    background: #f5f5f5;
    display: inline;
    white-space: pre;
    min-height: 20px;
  }
`;

export const StyledSearchBar = styled.div`
  vertical-align: top;
  float: right;
  position: relative;
  input {
    height: 30px;
  }
`;
