let re;

// Literal Characters
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;
re = /d$/i;

// String to Match
const str = 'Hello World';


// Log Result
const result = re.exec(str);
console.log(result);

function reTest (re, str) {
    if(re.test(str)) {
        console.log(`'${str}' matches '${re.source}'`);
    } else {
        console.log(`'${str}' does NOT match '${re.source}'`);
    }
}

reTest(re, str);