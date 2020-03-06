// Iterator Example

function nameIterator (names) {
    let nextIndex = 0;
    
    return {
        next: function () {
            return nextIndex < names.length ?
            {value: names[nextIndex++], done: false} :
            {done: true}
        }
    };
}