const book = {
    title: "The Warrior's Path",
    author: "Aisha El-Masri",
    pages: 374
};

book.genre = "fantasy";

function hasProperty(obj, key) {
    if (obj.hasOwnProperty(key)) {
        return true;
    }
    return false;
}

function getKeys(obj) {
    const array = [];
    for (const key in obj) {
        array.push(key);
    }

    return array;
}

console.log(getKeys(book));

function getValues(obj) {
    return Object.values(obj);
}


console.log(getValues(book));