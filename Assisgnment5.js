function rectangleArea(length = 5, width = 4) {
    return length * width;
}

const arrowArea = (length = 5, width = 4) => length * width;

console.log("StandardFunctionArea(Default5x4):" + rectangleArea());
console.log("ArrowFunctionArea(Custom10x3):" + arrowArea(10, 3));

{
    let blockVar = 10;
}

try {
    console.log(blockVar);
} catch (error) {
    console.log("ScopeTestError:ReferenceError:blockVarisnotdefined");
}