import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Text = styled.h2`
    font-size: 15px;
    font-weight: bold;
    color: #FFFFFF;
`

export const ButtonContainer = styled.div`
    width: 60px;
    margin-bottom: 30px;
`

export const ButtonSubmitContainer = styled.div`
    margin-top: 20px;
    height: 100px;
`

export const CartEmpty = styled.div`
    background-color: gray;
    height: 50px;
    width: 420px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`