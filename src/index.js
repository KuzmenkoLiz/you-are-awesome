// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {return propertyName;};
const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, { value: 'value', enumerable: false});
    return propertyName;
};
const createProtoMagicObject = () => {
    var magicObject = () => {};
    magicObject.prototype = magicObject.__proto__;
    return magicObject;
};
var increment = 0;
const incrementor = () => {
    increment++;
    return incrementor;
};
incrementor.valueOf = () => increment;

var asyncIncrement = 0;
const asyncIncrementor = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            asyncIncrement++;
            resolve(asyncIncrement);
        }, 1)
    });
    return promise;
};
const createIncrementer = function* generste() {
    let incr = 1;
    while(true) {
        yield incr++;
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(param);
        }, 1000)
    });
    return promise;
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {
    return JSON.parse(JSON.stringify(null));
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort((left, right) => left.__proto__ - right.__proto__);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;