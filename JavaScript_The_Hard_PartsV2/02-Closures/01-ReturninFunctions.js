function createFunction() {
    function multiplyBy(num) {
        return num * 2;
    }

    return multiplyBy;
}

// One time run, this evaluated the function CODE of multiplyBy();
const generatedFunc = createFunction();
// generatedFunc has zero relations with createFunction()
const result = generatedFunc(3);
console.log(result);
