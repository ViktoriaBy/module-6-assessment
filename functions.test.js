const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
 
//shuffleArray returns array?
    test('is array', () =>{
        const arr2 = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8])
        expect(arr2).toBeInstanceOf(arr1)
           
    })

    //returns array of the same length as the argument sent in?
    test("length same as length of arr", () => {
        const arr1 = shuffleArray([12, 2323, 86, 61, 1, 34342, 53, 23, 64, 19]);
        expect(array).toHaveLength(10);
      });


});