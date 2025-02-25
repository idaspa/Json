import fs from 'fs';
const fetcharray = JSON.parse(fs.readFileSync("array.json"));
const fetchJson = JSON.parse(fs.readFileSync("nodes.json"));
const fetchBook = JSON.parse(fs.readFileSync("books.json"));

// Task 2. Flatten those numbers.
function flatten(array) {
    const newList = [];

    for (let i = 0; i < array.length; i++) {
        const numberElement = array[i];
        if (typeof numberElement === "number") {
            newList.push(numberElement);
        } else if (Array.isArray(numberElement)) {
            const newNumber = flatten(numberElement);
            newList.push(...newNumber);
        }
    }
    return newList;
}
//console.log(flatten(fetcharray))



// calculating sum of the full structure. 
function sum(values) {
    if (values === null) {
        return 0;
    }

    return sum(values.left) + sum(values.right) + values.value;
}
//console.log(sum(fetchJson))



// Report Deepest level of structure. 
function depthOf(node) {
    if (node === null) {
        return 0;
    }

    let lefty = depthOf(node.left);
    let rigthy = depthOf(node.right);
    let deepestDepth = Math.max(lefty, rigthy)
    return deepestDepth + 1;
}
//console.log(depthOf(fetchJson))


// Report the Number of nodes.
function numberOfNodes(node) {
    if (node === null) {
        return 0;
    }

    let leftNodeCount = numberOfNodes(node.left);
    let rightNodeCount = numberOfNodes(node.right);
    let leftAndRight = leftNodeCount + rightNodeCount;
    return leftAndRight + 1;
}
//console.log(numberOfNodes(fetchJson))


// Task 4. 
// Returning only books starting with the word "The"
function searchWord(books) {
    let result = [];
    for (let i = 0; i < books.length; i++) {
        if (books[i].title.substring(0, 3) === "The") {
            result.push(books[i]);
        }
    }
    return result;
}
//console.log(searchWord(fetchBook))


//Return only books written by authors with a `t` in their name
function findLetter(books) {
    let result = [];
    for (let i = 0; i < books.length; i++) {
        let author = books[i].author;
        for (let j = 0; j < author.length; j++) {
            if (author[j] === "t" || author[j] === "T") {
                result.push(books[i])
                break;
            }
        }
    }
    return result;
}
//console.log(findLetter(fetchBook))


// The # of books written before 2004
function beforeYear(books, year) {
    let number = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year < year) {
            number++

        }
    }
    return number;
}
//console.log(beforeYear(fetchBook, 2004));


//The # books written after 1992.
function afterYear(books, year) {
    let number = 0;
    for (let i = 0; i < books.length; i++) {
        if (books[i].publication_year > year) {
            number++;
        }
    }
    return number;
}
//console.log(afterYear(fetchBook))


//sort by name.
function sortByName(books) {
    let result = []
    for (let i = 0; i < books.length; i++) {
        let author = books[i].author;
        for (let j = 0; j < author.length; j++) {
            result.push(books[i].author)
            break;
        }
    } return result.sort()
}
//console.log(sortByName(fetchBook))



// sort books alphabetically
function booksAlphabet(books) {
    let result = []
    for (let i = 0; i < books.length; i++) {
        let title = books[i].title;
        for (let j = 0; j < books.length; j++) {
            result.push(books[i].title)
            break;
        }
    } return result.sort()
}
//console.log(booksAlphabet(fetchBook))



// Return isbn number of all books
function isbnNumberOfBooks(books) {
    let newList = [];
    for (let i = 0; i < books.length; i++) {
        newList.push(books[i].isbn)
        newList.push(books[i].author)

    } return newList
}
//console.log(isbnNumberOfBooks(fetchBook))