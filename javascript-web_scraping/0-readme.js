#!/usr/bin/node
const fs = require('fs')
const arguments = process.argv;

fs.readFile(`${arguments[1]}`, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);   
    }
})