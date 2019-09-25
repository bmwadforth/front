import React from "react";
import {ReactComponent as Graduate} from "../Assets/Vectors/flame-4.svg";

export default function About(props) {
    return (
        <div className="about">
            <h1>About Me</h1>
            <p>
                My name's Brannon & I'm from Australia. Writing computer programs is a passion of mine. This website
                helps me showcase some of the work I do, and it allows me to write about things that I'm interested in.
            </p>
            <p>
                After studying IT security at university, I've come to learn I don't only have a passion for
                software &
                computers, but I also have a passion for securing them.
            </p>
            <p>
                Security is incredibly important. A good example of security is something we often overlook -
                the
                lock(s) on a primary door of a building. We use locks for the purposes of physical security,
                pretty
                obvious. Much like how there are multiple entry points to a house, there are multiple entry
                points in a
                computer program. You lock your doors at night to mitigate the risk of someone breaking into
                your home.
                Similarly, there are steps we can take to mitigate the risk of someone with nefarious intentions
                from
                compromising a computer system.
            </p>
            <div className="graduate"><Graduate/></div>
        </div>
    )
}