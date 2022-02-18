import Modal from 'react-modal'
import { FC, useState } from 'react'
import {
  Container,
  RadioButton,
  TransactionTypeContainer,
} from './TransactionModalStyles'
import closeIcon from '../../assets/close.svg'
import incomingIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'

interface TransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const TransactionModal: FC<TransactionModalProps> = ({
  isOpen,
  onRequestClose,
}: TransactionModalProps) => {
  const [type, setType] = useState('deposit')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeIcon} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Título</h2>
        <input placeholder="Título" />
        <input type="number" placeholder="Valor" />

        <TransactionTypeContainer>
          <RadioButton
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => {
              setType('deposit')
            }}
          >
            <img src={incomingIcon} alt="Entrada" />
            <span>Entrada</span>
          </RadioButton>
          <RadioButton
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => {
              setType('withdraw')
            }}
          >
            <img src={outcomeIcon} alt="Saída" />
            <span>Saída</span>
          </RadioButton>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
