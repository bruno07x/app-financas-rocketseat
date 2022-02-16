import { Container, Content } from './style'
import logo from '../../assets/logo.svg'
import { FC } from 'react'

interface HeaderProps {
  onOpenNewTransactionModal: () => void
}

export const Header: FC<HeaderProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <>
      <Container>
        <Content>
          <img src={logo} alt="Logo" title="Logo" />
          <button onClick={onOpenNewTransactionModal}>Nova Transação</button>
        </Content>
      </Container>
    </>
  )
}
