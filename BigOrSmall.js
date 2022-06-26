//finding big and small number in the given array[1,99,42,69,102,-10,159,352]
//first create an empty arrayanswers[].
//using a for loop to parse thru the all the elements of the given array
//if the number is less than 100 add a "Small" to the the answer array using push method
//if the number is greater than 100 add a string"Big" to the the answer array using push method

const GivenArray=[1,99,42,69,102,-10,159,352]
function bigOrSmall(GivenArray) {
    const answers = [];//empty array to hold small /Big as a string
    for(let i =0; i<GivenArray.length; i++){
        if (GivenArray[i] <= 100) {
            answers.push('small,');
        }
        else {
            answers.push('Big,');
            // the answer array should look like(small,small,small,small,Big,small,Big,Big)
            // if not check your code
        }
    }
    return answers
}

console.log(bigOrSmall([1,99,42,69,102,-10,159,352]))