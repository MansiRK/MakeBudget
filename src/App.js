import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from './components/Budget';
import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
import AllocationForm from './components/AllocationForm';
import Curremcy from './components/Currency';


const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                   
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                   
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                    <div className='col-sm'>
                        <Curremcy />
                    </div>
                    <h3 className='mt-3'>Allocation</h3>
                   
                    <div className='row'>
                        <div className='col-sm'>
                            <ExpenseList />
                        </div>

                    </div>

                    <h3 className='mt-3'>Change Allocation</h3>
                    <div className='row'>
                        <div className='col-sm'>
                            <AllocationForm />
                        </div>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
