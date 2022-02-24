import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface TransactionProviderProps {
  children: ReactNode
}
interface TransactionProps {
  id: number
  title: string
  type: string
  value: number
  category: string
  createdAt: string
}
interface TransactionContextValueProps {
  transactions: TransactionProps[]
  createTransaction: (transactions: TransactionInputProps) => Promise<void>
}
type TransactionInputProps = Omit<TransactionProps, 'id' | 'createdAt'>

// * -------------------- CREATE CONTEXT --------------------- *
const TransactionContext = React.createContext(
  {} as TransactionContextValueProps
)

export const TransactionProvider = ({ children }: TransactionProviderProps) => {

  const [transactions, setTransactions] = useState<TransactionProps[]>([])

  useEffect(() => {
    api
      .get('/transactions')
      .then((res) => setTransactions(res.data.transactions))
  }, [])

  const createTransaction = async (transactionInput: TransactionInputProps) => {
    const response = await api.post('/transactions', {...transactionInput, createdAt: new Date()})
    const { transaction } = response.data

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    // * Provider context to children components
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

// * -------------------- CREATE HOOK --------------------- *
export const useTransactions = () => {
  const context = useContext(TransactionContext)

  return context
}
