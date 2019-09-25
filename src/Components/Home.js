import React from "react";
import Navigation from "./Navigation/Navigation";

export default function Home(props) {
    return (
        <div className="home">
            <div className="background" />
            <div className="banner">
                <h1>bmwadforth<strong>dot</strong>com</h1>
                <h2>Programmer | Ethical Hacker | Australian</h2>
                <Navigation/>
            </div>
        </div>
    )
}