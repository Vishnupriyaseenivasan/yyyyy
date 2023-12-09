import React from "react";
import './Style.css';
import { Link } from "react-router-dom";

const Dashboard = () => {
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
                        <h3>Account Summary</h3>
                        <div className="AccountDetails">
                            <h4>Savings Account</h4>
                            <div>Closing Balance: 20,000.05</div>
                        </div>
                        <div className="AccountDetails">
                            <h4>Current Account</h4>
                            <div>Closing Balance: 24,583.00</div>
                        </div>
                        <div className="AccountDetails">
                            <h4>Credit Account</h4>
                            <div>Closing Balance: 16,792.10</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;