import {Container, Content} from './style';
import {Dashboard} from '../Dashboard'
import logo from '../../assets/logo.svg';

export const Header = () => {
    return (
        <>
            <Container>
                <Content>
                    <img src={logo} alt="Logo"/>
                    <button>Nova Transação</button>
                </Content>
            </Container>
            <Dashboard/>
        </>
    );
}