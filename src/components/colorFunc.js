import React from 'react';

export default function() {
    let hex = '0123456789abcdefABCDEF'
    let randomList = '#'
    for (let i=0 ; i<6 ; i++) {
        let random = hex[Math.floor(Math.random() * hex.length)]
        randomList += random
    }
    return randomList
}