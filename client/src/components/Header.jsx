import React, { useState, useEffect } from "react";

export default function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem('isAuthenticated') === 'true');

    useEffect(() => {
        const handleStorageChange = (e) => {
            if (e.key === 'isAuthenticated') {
                setIsAuthenticated(e.newValue === 'true');
            }
        };

        window.addEventListener('storage', handleStorageChange);
        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    console.log(isAuthenticated);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light primary-color">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/nhl">NHL</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/landing">Landing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/transactions/12345">Transactions123</a>
                        </li>


                        {isAuthenticated !== 'true' ? (
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <a className="nav-link" href="/logout">Logout</a>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>
        </div>
    );
}
