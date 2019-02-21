let first = [
    {id: 1, name: 'Peter', firstJob: 'worker'},
    {id: 2, name: 'Ivan', firstJob: 'designer'},
    {name: 'Denis', firstJob: 'engineer'},
    {id: 3, name: 'Mark', firstJob: 'engineer'},
    {name: 'Franck', firstJob: 'worker'},
    {id: 5, name: 'Antonio', firstJob: 'hardworker'},
];
let second = [
    {id: 3, lastname: 'Alexov', secondJob: 'worker'},
    {id: 5, lastname: 'Antonov', secondJob: 'worker'},
    {lastname: 'Maximov', secondJob: 'worker'},
    {id: 1, lastname: 'Denisimov', secondJob: 'designer'},
    {id: 2, lastname: 'Carlov', secondJob: 'engineer'},
    {id: 8, lastname: 'Hunter', firstJob: 'worker', secondJob: 'engineer'},
];
let third = [
    {id: 1, name: 'Morris', firstJob: 'worker'},
    {id: 2, name: 'Carl', firstJob: 'engineer'},
    {name: 'Stiven', firstJob: 'worker'},
    {id: 11, name: 'Antonina', firstJob: 'designer'},
    {id: 5, name: 'Wendy', firstJob: 'worker'},
    {id: 6, name: 'Peter', firstJob: 'engineer'},
];
let fourth = [
    {id: 5, lastname: 'Wendys', secondJob: 'worker'},
    {id: 6, lastname: 'Peterson', secondJob: 'engineer'},
    {id: 3, lastname: 'Aleximov', secondJob: 'worker'},
    {id: 15, lastname: 'Antonovich', secondJob: 'worker'},
];



// Log messages in console
function log(message) {
    if(message) {
        console.error(message);
    }
}

// Check is it array
function isArray(arr) {
    if(arr instanceof Array) {
        return true;
    } else {
        log(arr + ' - is not an array!');
        return false;
    }
}

// Check if array is not empty
function isArrayEmpty(arr) {
    if (!arr.length) {
        log('An array shouldn`t be empty');
        return false;
    } else {
        return true;
    }
}

// Check if item in array is object
function isItemTypeIsObject(item) {
    if(typeof item != "object") {
        log(item + ' - is not an object, it`s - ' + typeof item);
        return false;
    } else {
        return true;      
    }
}

// Check if user give us two arguments.
function checkArgumentsLength(args) {
    if(args.length != 2) {
        log('Need two arguments. No more, no less!');
        return false;
    } else {
        return true;
    }
}


// Check if we have objects in array.
function checkIfContainsObject(array) {
    let checkedArr = [];
    if(isArray(array) && isArrayEmpty(array)) {
        array.forEach(function(item){
            if(isItemTypeIsObject(item)) {
                checkedArr.push(item);
            }
        });
    } else {
        return false;
    }
    return checkedArr;
}

function compareArrayByItem(searchItem, searchPlace) {
    let mergedObj = {};
    if(searchItem) {
        searchPlace.forEach(function(el){
            if (el.id && el.id === searchItem.id) {
                mergedObj = Object.assign(searchItem, el);
            }
        });
    }
    return mergedObj;
}

function checkArray(arr1, arr2) {
    if(checkArgumentsLength(arguments)) {
        var checkedArr1 = checkIfContainsObject(arr1);
        var checkedArr2 = checkIfContainsObject(arr2);
        var resultArray = [];
        checkedArr1.forEach(function(item){
            var items = compareArrayByItem(item, checkedArr2);
            if(Object.keys(items).length !== 0)
            {
                resultArray.push(items);
            } else {    
                resultArray.push(item); 
            }    
        });
        checkedArr2.forEach(function(item){
            if(!item.id) {
                resultArray.push(item);
            } else if (item.id && resultArray.every((el)=>{return el.id!==item.id})) {   
                resultArray.push(item);
            }
        });
        
        if(resultArray) {
            console.dir(resultArray);
        }
    }
}

checkArray(first, second);
checkArray(second, third);
checkArray(third, fourth);