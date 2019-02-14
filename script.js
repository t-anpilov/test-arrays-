function go(x, y){
    if (x.length >= y.length) {
        checkArray(x, y);         
    } else {
        checkArray(y, x);
    }
}

function checkArray(arr1, arr2) {
    var result = [];
    let l = arr1.length;
    let m = arr2.length;
    
    let copy_arr2 = arr2.slice(0);
    
    for (let i=0; i<l; i++) {
        
        for (let j=0; j<m; j++){
            if ('id' in arr1[i] && 'id' in arr2[j] && arr1[i].id == arr2[j].id) {
                delete copy_arr2[j];
            }
        }
    }  
    
    result = arr1.concat(copy_arr2);
    result.forEach(elem => {
        console.log(elem)
    });
    return result;
}
//_______________ПЕРЕВІРКА____________________________
var first = [
    {id: 1, name: 'Peter', position: 'worker'},
    {id: 2, name: 'Ivan', position: 'designer'},
    {name: 'Denis', position: 'engineer'},
    {id: 3, name: 'Mark', position: 'engineer'},
    {name: 'Franck', position: 'worker'},
]
var second = [
    {id: 4, name: 'Alex', position: 'worker'},
    {id: 5, name: 'Anton', position: 'worker'},
    {name: 'Max', position: 'worker'},
    {id: 1, name: 'Denis', position: 'designer'},
]

var third = [
    {id: 1, name: 'Morris', position: 'worker'},
    {id: 2, name: 'Carl', position: 'engineer'},
    {name: 'Stiven', position: 'worker'},
    {id: 11, name: 'Antonina', position: 'designer'},
    {id: 5, name: 'Wendy', position: 'worker'},
    {id: 6, name: 'Peter', position: 'engineer'},
]

go(first, second);
console.log('-------------------------------------');
go(second, third);