import React from "react";
import {ReactComponent as Background} from "../Assets/Vectors/flame-4.svg";
import {ReactComponent as Background2} from "../Assets/Vectors/flame-design-science.svg";
import {ReactComponent as Background3} from "../Assets/Vectors/flame-education.svg";


export default function Home(props) {
    return (
        <div className="home">
            <div className="background">
                <Background/>
                <Background2/>
                <Background3/>
            </div>
            <div className="title">
                <h1>bmwadforth<strong>dot</strong>com</h1>
                <h2>Programmer | Ethical Hacker | Australian</h2>
            </div>
        </div>
    )
}