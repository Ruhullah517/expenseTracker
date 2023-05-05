import { createStore } from "redux";


let initialVal = {
    expenses: [],
    income: []
};

function TransactionData(oldData = initialVal, newData) {
    if (newData.type === 'ADD_TRANSACTION') {
        if (newData.payload.amount > 0) {
            oldData.income.push(newData.payload);
        } else {
            oldData.expenses.push(newData.payload);
        }
    } else if (newData.type === 'DELETE-INCOME') {
        oldData.income = newData.payload
    } else if (newData.type === 'DELETE-EXPENSE') {
        oldData.expenses = newData.payload
    } else if (newData.type === 'EDIT-INCOME') {
        oldData.income[newData.index].amount = newData.newAmount;
    } else if (newData.type === 'EDIT-EXPENSE') {
        oldData.expenses[newData.index].amount = newData.newAmount;
    }
    // Always return the modified state
    return { expenses: [...oldData.expenses], income: [...oldData.income] };
}




let store = createStore(TransactionData);

export { store };