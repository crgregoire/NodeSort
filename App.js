var sortedCategories = require('./SortCategories');

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
    },
]

console.log(sortedCategories(categories))