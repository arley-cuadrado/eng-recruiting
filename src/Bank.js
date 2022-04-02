import { useState, useRef, useEffect, ReactDOM } from "react";
import Table from '../src/Table'

function Bank() {
   
        const url = 'https://quietstreamfinancial.github.io/eng-recruiting/transactions.json';
        const [ todos, setTodos ] = useState()

        const fetchApi  = async() => { 
             const response = await fetch( url )
             console.log(response.status)

            const responseJSON = await response.json()
            setTodos(responseJSON)
            console.log(responseJSON)
        }

        useEffect(() =>{
            fetchApi()
        }, [])


    return(
        <>
            <div className="padding-main">
                <table>
                    <thead>
                        <tr className="header-table">
                            <td>ID</td>
                            <td>Name</td>
                            <td>Number</td>
                            <td>Email</td>
                            <td>Category</td>
                            <td className="amount">Amount</td>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        !todos ? 'Cargando...' : 
                        todos.map( (todo, index) =>{
                            return <Table 
                                        key={index} 
                                        todo={todo}
                                    />
                        })
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Bank;

