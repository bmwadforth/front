import React from "react";
import {ReactComponent as Background} from "../Assets/Vectors/flame-4.svg";

export default function Home(props) {
    return (
        <div className="home">
            <div className="background">
                <Background/>
            </div>
            <div className="title">
                <h1>bmwadforth<strong>dot</strong>com</h1>
                <h2>Programmer | Ethical Hacker | Australian</h2>
            </div>
        </div>
    )
}