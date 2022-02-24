import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './style'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export const Summary = () => {
  // const [deposit, setDeposit] = useState(0)

  const { transactions } = useTransactions()

  const summaryValues = transactions.reduce(
    (prevVal, curVal) => {
      switch (curVal.type) {
        case 'deposit':
          prevVal.deposits += curVal.value
          prevVal.totals += curVal.value
          break
        case 'withdraw':
          prevVal.withdraws += curVal.value
          prevVal.totals -= curVal.value
          break
      }

      return prevVal
    },
    {
      deposits: 0,
      withdraws: 0,
      totals: 0,
    }
  )

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summaryValues.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>
          -{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summaryValues.withdraws)}
        </strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summaryValues.totals)}
        </strong>
      </div>
    </Container>
  )
}
