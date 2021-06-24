//product categories
var categories = [
    {
        "name": "Accessories",
        "id": 1,
        "parent_id": 20,
    },
    {
        "name": "Watches",
        "id": 57,
        "parent_id": 1
    },
    {
        "name": "Men",
        "id": 20,
        "parent_id": null
    }
]

// generic swap function
const swap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

// generic comparison function
const compare = (x, y) => {
    return x > y ? 1 : x < y ? -1 : 0;
};


function compareArrays(a, b) {
    return compare(
        [compare(a.parent_id, b.id), -compare(a.id, b.parent_id)],
        [compare(b.parent_id, a.id), -compare(b.id, a.parent_id)]
    )
}


function bubbleSort(inputJson) {
    for (let i = 0; i < inputJson.length; i++) {
        for (let j = 0; j < inputJson.length - 1 - i; j++) { // refer to note below
            if (compareArrays(inputJson[j], inputJson[j + 1]) === -1) {
                swap(inputJson, j, j + 1);
            }
        }
    }
    return inputJson.reverse();
}

function buildInsertOrderDictionary(inputArray, outputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        outputArray.push({
            insertOrder: i + 1,
            category: inputArray[i].name,
        });
    }
    return outputArray
}

function sortCategoriesForInsertWithoutSort(inputJson) {
    let properJsonOutput = []
    inputJson = bubbleSort(inputJson)
    return properJsonOutput = buildInsertOrderDictionary(inputJson, properJsonOutput)
}


function sortCategoriesForInsertUsingSort(categories) {
    let properJsonOutput = []
    let categoriesSort = [...categories] //clone array without editing

    //sort parent_id ascending then id descending
    // JS sort is Θ(n^2) below 10 entries, and Θ(n log(n)) above 10 entries which is faster than n^2 at certain levels
    categoriesSort.sort(function (a, b) {
        //note the minus before -cmp, for descending order
        return compare(
            [compare(a.parent_id, b.id), -compare(a.id, b.parent_id)],
            [compare(b.parent_id, a.id), -compare(b.id, a.parent_id)]
        );
    });

    return properJsonOutput = buildInsertOrderDictionary(categoriesSort, properJsonOutput)
}

module.exports = function sortCategoriesForInsert(inputJson) {
    return properJsonOutput = sortCategoriesForInsertWithoutSort(inputJson)
}