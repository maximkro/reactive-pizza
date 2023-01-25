import React from "react";
import { Link } from "react-router-dom";



export const Header: React.FC = () => {


    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <div>
                            <h1>Reactive Pizza</h1>
                            <p>pizza piu buona del mondo</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}