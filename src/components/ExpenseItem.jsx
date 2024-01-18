import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)
   

    const changeTitleHandler = () => {
       setTitle('updated')
    }


    return (
        <div className='expense-item'>
             <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>{title}</div>
            <button onClick={changeTitleHandler}>Change Title</button>
            <div className='expense-item__price'>{props.price}</div>

           
        </div>
    )
}

export default ExpenseItem