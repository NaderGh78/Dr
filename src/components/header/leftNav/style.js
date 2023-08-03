import styled from "styled-components";

export const MyMenu = styled('div')` 
    width:${props => props.$openLeftMenu ? "40%" : "0"};  
    height: 100%;
    left:${props => props.$openLeftMenu ? "0" : "-40%"}; 
    background-color: #000;
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all .4s; 

    @media (max-width: 450px) {
        width:${props => props.$openLeftMenu ? "100%" : "0"};  
    }
`

export const MyLink = styled("a")`
    text-decoration: none;
    color: #f5b237;
    font-size: 30px;
    text-transform: uppercase;
    position: relative;
    transition: all .2s;
    margin-bottom: 10px;
    transform: translateX(-160px);  
    animation-name: ${props => props.$openLeftMenu ? "myAnimations" : ""};  
    animation-duration: .7s;
    animation-fill-mode: forwards;
    animation-delay: .1s;
    animation-timing-function: ease-in; 
    cursor: pointer;

    &:nth-of-type(1) {
        animation-duration: .3s;
    }

    &:nth-of-type(2) {
        animation-duration: .4s;
    }

    &:nth-of-type(3) {
        animation-duration: .5s;
    }

    &:nth-of-type(4) {
        animation-duration: .6s;
    }

    &:nth-of-type(5) {
        animation-duration: .7s;
    }

    &:nth-of-type(6) {
        animation-duration: .8s;
    }

    &:nth-of-type(7) {
        animation-duration: .9s;
    }

    &:nth-of-type(8) {
        animation-duration: 1s;
    }  
    
    /* make some of effect on hover */

    &::before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        background-color: #30c7b5;
        top: 0;
        left: 0;
        transition: all .3s;
    }

    &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        background-color: #30c7b5;
        bottom: 0;
        left: 0;
        transition: all .3s;
    }

    &:hover {
        letter-spacing: 2px;
    }

    &:hover:before,
    &:hover:after {
        width: 100%;
    } 

    @keyframes myAnimations {
        0% {
            transform: translateX(-160px);
        }

        100% {
            transform: translateX(0);
        }
    }

`
export const SpanClose = styled('span')`
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 40px;
    color: #f5b237;
    transition: all .2s;
    cursor: pointer;

    &:hover {
    transform: rotate(45deg);
    }
`