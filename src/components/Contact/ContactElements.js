import styled from 'styled-components';


export const Form = styled.form`
    width: 100%;
    margin: auto;
    max-width: 1000px;
    justify-content: center;
    align-items: center;
    display: block;
    height: 55vh;
    margin-bottom: 150px;
`;

export const Group = styled.div`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    padding: 10px;
`;

export const Control = styled.input`
    height: 50px;
    font-size: 16px;
    margin: 0;
    border: 1px solid #2222225c;
    border-radius: 5px;
    padding-left: 10px;
    width: 1000px;

    @media screen and (max-width: 640px) {
        width: 420px;
    };

    @media screen and (max-width: 375px) {
        width: 350px;
    };
`;

export const MessageBody = styled.input`
    height: 300px;
    width: 1000px;
    padding-left: 10px;
    padding-top: 10px;
    font-size: 16px;
    margin: 0;
    border: 1px solid #2222225c;
    border-radius: 5px;

    @media screen and (max-width: 640px) {
        width: 420px;
    };

    @media screen and (max-width: 375px) {
        width: 350px;
    };
`;

export const Button = styled.button`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#f9f9f9' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '50px 48px' : '10px 20px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: 1.2rem;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;

    &:hover {
        background-color: #05e8ba;
        background-image: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%);
        color: #fff;
    }

    @media screen and (max-width: 640px) {
        font-size: .8rem;
    }
`;

export const NotificationP = styled.p`
    padding-top: 10px;
    padding-left: 5px;
    font-size: 16px;
`;

