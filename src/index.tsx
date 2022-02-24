import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData(
      {
        transactions: [
          {
            id: 1,
            title: 'Developer site',
            value: 3300,
            type: 'deposit',
            category: 'Developer',
            createdAt: new Date()
          },
          {
            id: 2,
            title: 'Jogo pokémon',
            value: 450,
            type: 'withdraw',
            category: 'Jogo',
            createdAt: new Date()
          }
        ]
      }
    )
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, req) => {
      const data = JSON.parse(req.requestBody)
      return schema.create('transaction', data)
    })
  },
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
