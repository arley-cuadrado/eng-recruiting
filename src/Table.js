import React from "react";

function Table( props ){

    var valor = props.todo.transaction_amount;

    return(
        <>
            <tr>
                <td><strong>{props.todo.id}</strong></td>
                <td className="name">{props.todo.customer_name}</td>
                <td>{props.todo.account_number}</td>
                <td>{props.todo.customer_email}</td>
                <td>{props.todo.account_type}</td>
                <td className={valor >= '$1'  ? 'green' : 'red'}>{props.todo.transaction_amount}</td> 
            </tr>
        </>
    )
}

export default Table;

