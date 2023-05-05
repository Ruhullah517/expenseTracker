import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import AddTransaction from './components/addTransaction/addTransaction';
import { store, persister } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import TransactionHistory from './components/transactionHistory/transactionHistory';
import IncomeExpense from './components/incomeExpense/incomeExpense';

function App() {
  return (<Provider store={store}>
    {/* <PersistGate loading={null} persister={persister}> */}
    <div className='main'>

      <IncomeExpense />
      <AddTransaction />
      <TransactionHistory />
    </div>
    {/* </PersistGate> */}
  </Provider>
  );
}

export default App;
