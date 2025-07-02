"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unflatten = exports.flatten = void 0;
const flatten = (object) => {
    const flattenedObject = {};
    const processor = (workingObject, keyTree = []) => {
        if (typeof workingObject === 'object' && workingObject !== null) {
            for (const [key, value] of Object.entries(workingObject)) {
                processor(value, [...keyTree, key]);
            }
        }
        else {
            const key = keyTree.join('.');
            flattenedObject[key] = workingObject;
        }
    };
    processor(object);
    return flattenedObject;
};
exports.flatten = flatten;
const unflatten = (flattenedObject) => {
    const unflattenedObject = {};
    for (const flattenedKeyTree in flattenedObject) {
        const keys = flattenedKeyTree.split('.');
        let workingObject = unflattenedObject;
        keys.forEach((key, index) => {
            if (typeof workingObject === 'object' && workingObject !== null) {
                const temporaryObject = workingObject;
                if (index === keys.length - 1) {
                    temporaryObject[key] = flattenedObject[flattenedKeyTree];
                }
                else {
                    if (!(key in workingObject)) {
                        temporaryObject[key] = !isNaN(Number(keys[index + 1])) ? [] : {};
                    }
                    workingObject = temporaryObject[key];
                }
            }
        });
    }
    return unflattenedObject;
};
exports.unflatten = unflatten;
