import { Container } from 'atoms/Container/Container';
import { Heading } from 'atoms/Heading/Heading';
import { SearchInput } from 'molecules/SearchInput/SearchInput';


import './Header.css';

export const Header = ({ children }) => (
    <header className="header">
        <Container type='flex-space'>
            <Heading>Best movie site</Heading>
        </Container>
    </header>
)