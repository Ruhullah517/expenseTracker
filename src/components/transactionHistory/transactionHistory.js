import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImCancelCircle } from 'react-icons/im'
import { AiOutlineEdit } from 'react-icons/ai'
import './transactionHistory.css';
// import store from '../path/to/store';




const TransactionHistory = () => {
    let data = useSelector((store) => store); // Get the entire store state object

    let dispatch = useDispatch();



    let deleteKro = (type, index) => {
        let transactions = type === 'income' ? [...data.income] : [...data.expenses];
        transactions.splice(index, 1);

        dispatch({
            type: 'DELETE-' + type.toUpperCase(),
            payload: transactions
        });
    };


    let editKro = (type, index) => {
        let newAmount = prompt('enter new Amount');
        while (!/^[-]?\d+$/.test(newAmount)) {
            newAmount = prompt("Please enter valid Number");
        }
        if (isNaN(newAmount)) {
            alert('Enter a Valid Number');
        } else {

            // let transactions = type == 'income' ? [...data.income] : [...data.expenses];
            dispatch({
                type: 'EDIT-' + type.toUpperCase(),
                newAmount,
                index,

            });

        };
    };








    return (
        <>
            <div>
                <h2>Transaction History</h2>
                <hr />
                <ul>
                    {data.income.map((trans, index) => {

                        return <>
                            <li className={trans.amount > 0 ? 'historyListIncome' : 'historyListExpense'} key={index}>
                                <ImCancelCircle size={20} className='icons' onClick={() => {
                                    deleteKro(trans.amount > 0 ? 'income' : 'expense', index);
                                }
                                } />
                                {trans.description} <span>${trans.amount}</span>
                                <AiOutlineEdit size={20} className='icons' onClick={() => {
                                    editKro(trans.amount > 0 ? 'income' : 'expense', index);
                                }} />
                            </li>
                        </>
                    })}
                    {data.expenses.map((trans, index) => {

                        return <>
                            <li className={trans.amount > 0 ? 'historyListIncome' : 'historyListExpense'} key={index}>
                                <ImCancelCircle size={20} className='icons' onClick={() => {
                                    deleteKro(trans.amount > 0 ? 'income' : 'expense', index);
                                }
                                } />
                                {trans.description} <span>${trans.amount}</span>
                                <AiOutlineEdit size={20} className='icons' onClick={() => {
                                    editKro(trans.amount > 0 ? 'income' : 'expense', index);
                                }} />
                            </li>
                        </>
                    })}
                </ul>
            </div>
        </>
    );
};

export default TransactionHistory;
