import styled from 'styled-components';
import {
  FaArrowAltCircleRight,
  FaArrowAltCircleLeft,
  FaCheck,
  FaWindowClose,
  FaStar,
} from 'react-icons/fa';

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
  top: 300px;
  right: 0px;
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
  left: 100px;
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
  display: flex;
  justify-content: flex-end;
  postion: absolute;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  color: #283618ff;
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
