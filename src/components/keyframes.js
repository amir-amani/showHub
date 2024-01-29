// WARNING : USE ONLY FOR NAVBAR !!!

import {keyframes} from "styled-components";

const slideIn = keyframes`
    from {
        transform: translateX(100%);
        opacity: 0;
        visibility: hidden;
    }
    to {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
        visibility: visible;
    }
    to {
        transform: translateX(100%);
        opacity: 0;
        visibility: hidden;
    }
`;

const rotateDown = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(50deg);
    }
`;
const rotateDownReverse = keyframes`
    from {
        transform: rotate(50deg);
    }
    to {
        transform: rotate(0);
    }
`;


const rotateUp = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(-50deg);
    }
`;
const rotateUpReverse = keyframes`
    from {
        transform: rotate(-50deg);
    }
    to {
        transform: rotate(0);
    }
`;

export {slideIn , slideOut , rotateDown , rotateDownReverse , rotateUp , rotateUpReverse}