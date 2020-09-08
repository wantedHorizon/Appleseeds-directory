const makeAllCaps = (arr) => {
    return new Promise((res, rej) => {

        if (!(arr instanceof Array)) {
            rej('arr is not an array');
        }

        const result = arr.map((element, i) => {
            if (typeof (element) !== 'string') {
                rej(`arr[${i}] is not of type string`);
            }

            return element.toUpperCase();
        });

        res(result);
    })
}

const sortWords = (arr) => {
    return new Promise((res, rej) => {
        if (!(arr instanceof Array)) {
            rej('arr is not an array');
        }
        res(arr.sort());


    });

}



const arr1 = ["aaa", 'bbb', 'abab', 'test3', 'test1', 'none'];
const arr2 = ["aaa", 'bbb', 'abab', 5, 'test1', 'none'];
const arr3 = {str1:'aaa', str2:'bbb'};



const result1 = makeAllCaps(arr1)//[ 'AAA', 'ABAB', 'BBB', 'NONE', 'TEST1', 'TEST3' ]
    .then(arr => sortWords(arr))
    .then(arr => {
        console.log(arr)
    })
    .catch(err => console.error(err));

    const result2 = makeAllCaps(arr2)//arr[3] is not a string
    .then(arr => sortWords(arr))
    .then(arr => {
        console.log(arr)
    })
    .catch(err => console.error(err));



    const result3 = makeAllCaps(arr3) //not an array
    .then(arr => sortWords(arr))
    .then(arr => {
        console.log(arr)
    })
    .catch(err => console.error(err));


