import styled from 'styled-components';


export const Container = styled.div`
    background-color: #706C75;
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    border-bottom: 1px solid white;
`

export const IconContainer = styled.div`
    height: 30px;
    width: 30px;
    background-color: #DEDBE0;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonDelete = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    :active{
        background-color: gray;
    }
    &:hover {
            color: white;
          }
`