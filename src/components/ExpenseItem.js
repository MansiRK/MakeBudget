import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { TiDelete } from 'react-icons/ti'
// import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {

        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const incAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        }
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    }

    const decAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.cost}</td>
            <td><button className="btn btn-success rounded-circle btn-icon fw-bold"  onClick={event => incAllocation(props.name)}>+</button></td>
            <td><button className="btn btn-danger rounded-circle fw-bold" onClick={event => decAllocation(props.name)}>-</button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;