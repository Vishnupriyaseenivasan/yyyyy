import React from "react";
import './Style.css';
import { Link } from "react-router-dom";

const FundTransfer = () => {
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
                        <Link to={'/Dashboard'} className="Dashboard_Link">Account Summary</Link>
                        <Link to={'/FundTransfer'} className="Dashboard_Link Dashboard_Link_Active">Fund Transfer</Link>
                    </div>
                    <div className="MainContent">
                        <h3>Fund Transfer</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td width="200">Choose an Account</td>
                                    <td>
                                        <select className="txt2" id="drpAccount">
                                            <option>-Select an Account-</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Choose Benefeciary</td>
                                    <td>
                                        <select className="txt2" id="drpBeneficiary">
                                            <option>-Select a Beneficiary-</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Amount in Rupees</td>
                                    <td>
                                        <input className="txt2" type="text" id="txtAmount" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Remarks</td>
                                    <td>
                                        <textarea className="txt2" id="txtRemarks">

                                        </textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FundTransfer;