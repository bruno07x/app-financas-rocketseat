import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { useState } from 'react'
import { TransactionModal } from './components/Modal/TransactionModal'
import { TransactionProvider } from './hooks/useTransactions'

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  const handleOpenTransactionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false)
  }

  return (
    // * Provider context to children components
    <div id="app">
      <TransactionProvider>
        <GlobalStyle />
        <Header onOpenTransactionModal={handleOpenTransactionModal} />
        <Dashboard />
        <TransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
      </TransactionProvider>
    </div>
  )
}
