import styled from 'styled-components';

export const CardContainer = styled.div`
  border-radius: 12px;
  height: 280px;
  width: 240px;
  background-color: #564D5A;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px;
  margin-bottom: 16px;
  &:hover {
            border: 1px solid #8B18F1;
          }
`;

export const ChipValue = styled.div`
    background-color: green;
    height: 25px;
    width: 80px;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    padding: 4px;
    align-items: center;
    justify-content: center;
`

export const ChipValueContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
    margin-bottom: 6px;
`

export const TextContainer = styled.div`
    height: 80px;
    width: 170px;
`

export const ProductTitle = styled.h2`
    font-size: 15px;
    margin-bottom: 8px;
    font-weight: bold;
    color: #FFFFFF;
`

export const ProductDescription = styled.p`
    font-size: 10px;
    color: #C1C0C0;
    margin-bottom: 12px;
`
export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 14px;
`

export const Icon = styled.img`
    height: 90px;
    width: 80px;
`

export const ButtonContainer = styled.div`
    width: 170px;
`
