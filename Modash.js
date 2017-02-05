// We write the Modash library in this file in the Unit Testing chapter

// const s = 'You know I want to give up blah blah blah.';

// Modash.truncate(s, 21);

// Modash.truncate(s, 100);

// const s = 'i am not sure how this WORKS';

// Modash.capitalize(s);

// let s = 'ended at';

// Modash.camelCase(s);


function truncate(string, length) {
    if(string.length > length) {
        return string.slice(0, length) + '...';
    } else {
        return string;
    }
}

function capitalize(string) {
    return (
        string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    );
}

function camelCase(string) {
    const words = string.split(/[\s|\-|_]+/);
    return [
        words[0].toLowerCase(),
        ...words.slice(1).map((w) => capitalize(w)),
    ].join('');
}

const Modash = {
    truncate,
    capitalize,
    camelCase
}

export default Modash;