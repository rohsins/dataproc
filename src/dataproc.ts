// DataProc

const flatten = (object: Record<string, unknown>): Record<string, unknown> => {
    const flattenedObject: Record<string, unknown> = {};

    const processor = (workingObject: unknown, keyTree: string[] = []) => {
        if (typeof workingObject === 'object' && workingObject !== null) {
            for (const [key, value] of Object.entries(workingObject)) {
                processor(value, [...keyTree, key]);
            }
        } else {
            const key = keyTree.join('.');
            flattenedObject[key] = workingObject;
        }
    }

    processor(object);
    return flattenedObject;
}

const unflatten = (flattenedObject: Record<string, unknown>): Record<string, unknown> => {
    const unflattenedObject: Record<string, unknown> = {};

    for (const flattenedKeyTree in flattenedObject) {
        const keys = flattenedKeyTree.split('.');
        let workingObject: unknown = unflattenedObject;

        keys.forEach((key, index) => {
            if (typeof workingObject === 'object' && workingObject !== null) {
                const temporaryObject = workingObject as Record<string, unknown>;

                if (index === keys.length - 1) {
                    temporaryObject[key] = flattenedObject[flattenedKeyTree];
                } else {
                    if (!(key in workingObject)) {
                        temporaryObject[key] = !isNaN(Number(keys[index + 1])) ? [] : {};
                    }

                    workingObject = temporaryObject[key];
                }
            }
        })
    }

    return unflattenedObject;
}

export {
    flatten,
    unflatten
};
