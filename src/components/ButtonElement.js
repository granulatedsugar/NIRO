// Reusable
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#f9f9f9' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '50px 48px' : '10px 20px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: 1.2rem;
    outline: none;
    border: none;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #05e8ba;
        background-image: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%);
        color: #fff;
    }

    @media screen and (max-width: 640px) {
        font-size: .8rem;
    }
`;