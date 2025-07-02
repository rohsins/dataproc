import { flatten, unflatten } from "dataproc";
// const { flatten, unflatten } = require('dataproc');

describe('Data Processor', () => {
    const testObject = {
        runtime: "nodejs",
        division: {
            name: "Hardware R&D",
            department: [
                {
                    hardware: {
                        type: "Research and Development",
                        floor: "Third floor"
                    }
                },
                {
                    firmware: {
                        type: "Research and Development",
                        floor: "Second floor"
                    }
                },
                {
                    software: {
                        type: "Research and Development",
                        floor: "First floor"
                    }
                }
            ]
        }
    }

    let flattenedObject = {};
    let unflattenedObject = {};

    it ('original object', () => {
        console.log(JSON.stringify(testObject, null, 4));
    })

    it ('flattening object', () => {
        flattenedObject = flatten(testObject);
        console.log(JSON.stringify(flattenedObject, null, 4));
    })

    it ('unflattening object', () => {
        unflattenedObject = unflatten(flattenedObject);
        console.log(JSON.stringify(unflattenedObject, null, 4));
    })
});
