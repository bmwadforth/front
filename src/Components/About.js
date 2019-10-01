import React from "react";
import {ReactComponent as FacebookIcon} from "../Assets/Icons/facebook.svg";
import {ReactComponent as TwitterIcon} from "../Assets/Icons/twitter.svg";
import {ReactComponent as InstagramIcon} from "../Assets/Icons/instagram.svg";
import {ReactComponent as GithubIcon} from "../Assets/Icons/github.svg";

export default function About(props) {
    return (
        <div className="about">
            <h1>About Me</h1>
            <p>
                My name's Brannon & I'm from Australia. Writing computer programs is a passion of mine. This website
                helps me showcase some of the work I do, and it allows me to write about things that I'm interested in.
                After studying IT security at university, I've come to learn I don't only have a passion for
                software &
                computers, but I also have a passion for securing them.
            </p>
            <p>
                I'm currently living and working out of Melbourne, Australia as a frontend software developer. I've had experience writing software in a variety of languages, using a variety of technology stacks,
                for a variety of business and professional reasons.
            </p>
            <div className="social">
                <span className="social-icon"><a href="https://www.facebook.com/bmwadforth"><FacebookIcon/></a></span>
                <span className="social-icon"><a href="https://twitter.com/bmwadforth"><TwitterIcon/></a></span>
                <span className="social-icon"><a href="https://www.instagram.com/bmwadforth/"><InstagramIcon/></a></span>
                <span className="social-icon"><a href="https://github.com/bmwadforth"><GithubIcon/></a></span>
            </div>
        </div>
    )
}