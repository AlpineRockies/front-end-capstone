import styled from 'styled-components';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

export const StyledButton = styled.button`
  border: 2px solid #d8cba7ff;
  background-color: #283618ff;
  color: white;
  padding: 15px 32 px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s all ease-out;
`;

export const StyledRightArrow = styled(FaArrowAltCircleRight)`
position: absolute;
  top: 255px;
  right: 0px;
  font-size: 3rem;
  color:#5a3b16ff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  transition: 05.2 all ease-out;
`;

export const StyledLeftArrow = styled(FaArrowAltCircleLeft)`
 position: absolute;
  top: 255px;
  left: 100px;
  font-size: 3rem;
  color:#5a3b16ff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`;
