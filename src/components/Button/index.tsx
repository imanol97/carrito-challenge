import { Container } from './styles'

interface Props {
    text: string;
    onChange?: any;
    isActive?: boolean;
  }

export const Button: React.FC<Props> = ({text, onChange, isActive}) => {
    return (
        <Container onClick={() => onChange()} isActive={isActive}>
            <p>{text}</p>
        </Container>
    );
};
