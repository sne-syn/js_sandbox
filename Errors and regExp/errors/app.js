try {
    // ReferenceError
    // myFunction();

    // TypeError
    // null.myFunction();

    // SyntaxErrar
    // eval('Hello');

    // URI Error
    decodeURIComponent('%');

} catch (error) {
    // console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.name);
    console.log(error instanceof ReferenceError);
} finally {
    console.log('Finally runs reguardless of result...');
}

console.log('Program continues...');