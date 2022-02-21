import { Container } from './style'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

interface TransactionProps {
  id: number
  title: string
  type: 'deposit' | 'withdraw'
  value: number
  category: string
  createdAt: string
}

export const TransactionTable = () => {
  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then((res) => setTransactions(res.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(transaction.value)}
              </td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}
