import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const CardContainer = styled.div`
    list-style: none;
    position: relative;
    min-width: 300px;

    :before {
        content: '';
        display: block;
        padding-bottom: 150%;
        width: 100%;
    }
`;

export const CardBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg =  styled.img`
     display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 500px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    };
`;

export const CardContent = styled.div`
    left: 20px;
    padding: var(--spacing-l);
    position: absolute;
    top: 20px;
`;

export const CardCategory = styled.p`
    color: #fff;
    font-size: 0.9rem;
    margin-bottom: var(--sapacing-s);
    text-transform: uppercase;
`;

export const CardHeading = styled.h1`
    color: #fff;
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0,0,0,0.2);
  line-height: 1.4;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 1rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 1rem;
`;

export const Button = styled.a`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 8px 10px;
    color: #222;
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    text-decoration: none;

    &:hover {
        background-color: #05e8ba;
        background-image: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%);
        color: #fff;
    }

    @media screen and (max-width: 640px) {
        font-size: 1rem;
    }
`;