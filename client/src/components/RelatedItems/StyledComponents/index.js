import styled from 'styled-components';
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaCheck,
  FaWindowClose,
  FaStar,
} from 'react-icons/fa';

export const StyledButton = styled.button`
  cursor: pointer;
  transition: 0.5s all ease-out;
  border: 2px solid var(--cafe-noir);
  text-transform: capitalize;
  font-variant-caps: small-caps;
  cursor: pointer;
  min-width: 200px;
  padding: 1em;
  margin-right: 1rem;
  background-color: var(--ebony);
  color: #faebd7;
  font-weight: 700;
`;

export const StyledRightArrow = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 300px;
  right: -100px;
  font-size: 3rem;
  color: #5a3b16ff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  transition: 0.5s all ease-out;
`;

export const StyledLeftArrow = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top:300px;
  left: 20px;
  font-size: 3rem;
  color: #5a3b16ff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  transition: 0.5s all ease-out;
`;

export const StyledCheck = styled(FaCheck)`
  color: #5a3b16ff;
  font-size: 1.8rem;
`;

export const StyledFaWindowClose = styled(FaWindowClose)`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  color: #283618ff;
  z-index:20;
`;

export const StyledFaStar = styled(FaStar)`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 1px;
  right: -30px;
  font-size: 3rem;
  z-index: 10;
  cursor: pointer;
`;
