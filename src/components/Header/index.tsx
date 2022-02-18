import { Container, Content } from './style'
import logo from '../../assets/logo.svg'
import { FC } from 'react'

interface HeaderProps {
  onOpenTransactionModal: () => void
}

export const Header: FC<HeaderProps> = ({ onOpenTransactionModal }) => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo" title="Logo" />
        <button onClick={onOpenTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  )
}
