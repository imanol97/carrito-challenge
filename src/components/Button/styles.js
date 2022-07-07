import styled, {css} from 'styled-components';

export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
    background-color: #8B18F1;
    border-radius: 8px;
    ${props => props.isActive && css`
    background: gray;
    cursor: none;
    pointer-events: none;
  `}
`;