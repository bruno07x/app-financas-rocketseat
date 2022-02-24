import Modal from 'react-modal'
import { FC, FormEvent, useState } from 'react'
import {
  Container,
  RadioButton,
  TransactionTypeContainer,
} from './TransactionModalStyles'
import closeIcon from '../../assets/close.svg'
import incomingIcon from '../../assets/income.svg'
import outcomeIcon from '../../assets/outcome.svg'
import { useTransactions } from '../../hooks/useTransactions'

interface TransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export const TransactionModal: FC<TransactionModalProps> = ({
  isOpen,
  onRequestClose,
}: TransactionModalProps) => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')

  const { createTransaction } = useTransactions()

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault()

    await createTransaction({
      title,
      value,
      type,
      category
    })

    setTitle('')
    setValue(0)
    setType('deposit')
    setCategory('')
    onRequestClose()
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Título</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event?.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event?.target.value))}
        />

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

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event?.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
