import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
// import { FaTimesCircle } from 'react-icons/fa';

const Curremcy = (props) => {

    const { currency, currencyName, dispatch } = useContext(AppContext);   

    const handleChangeCurrency = (value)=>{
        dispatch({type:"CHG_CURRENCY", payload: value});
    }

        return (
            <div className='alert alert-success'>
                <span>Currency: ({currency} {currencyName})</span>
                <select className="custom-select greenish_1" id="currencySelect" style={{ borderColor: "#93e499", width:"100px", height:"30px" }}
                onChange={(event) => handleChangeCurrency(event.target.value)}>
                    
                    <option  value="$" name="dollar">$ Dollar</option>
                    <option value="£" name="pound" >£ Pound</option>
                    <option value="€" name="euro" >€ Euro</option>
                    <option value="₹" name="ruppee" >₹ Ruppee</option>
                      </select>
            </div>
        );

        }
export default Curremcy;