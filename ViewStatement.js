import React from "react";
import './Style.css';
import { Link } from "react-router-dom";
import Statements from "./Statements";

const ViewStatement = () => {
    return(
        <div className="container">
            <div className="App_Header">
                <img className="logo" src="logo.png" />
                <Link to={"/"}><button className="logoutbtn">Logout</button></Link>
            </div>
            <div className="App_Body">
                <h1>Welcome Shyam</h1>
                <div className="App_Body_Content">
                    <div className="Sidebar">
                        <Link to={'/Dashboard'} className="Dashboard_Link Dashboard_Link_Active">Account Summary</Link>
                        <Link to={'/FundTransfer'} className="Dashboard_Link">Fund Transfer</Link>
                    </div>
                    <div className="MainContent">
                        <table className="statements">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Transaction Number</th>
                                    <th>Debit / Credit</th>
                                    <th>Closing Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                        {
                            Statements && Statements.length > 0?
                            Statements.map(
                                (statement) => {
                                    return(
                                        <tr>
                                            <td>{statement.date}</td>
                                            <td>{statement.description}</td>
                                            <td>{statement.transactionno}</td>
                                            <td>{statement.debitcredit}</td>
                                            <td>{statement.closingbalance}</td>
                                        </tr>
                                    )
                                }
                            ):
                            "No transactions found!"
                        }
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewStatement;