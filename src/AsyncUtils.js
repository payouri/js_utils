/** @module AsyncUtils */
/**
 * @function batchPromiseExecution
 * @description execute async functions in batches
 * @param {Array<Function>} functionsArray - Array of functions that return a promise
 * @param {Number} batchSize - Integer, number of functions to be passed in Promise.all
 * 
 * @returns {Promise} 
*/
export const batchPromiseExecution = async (functionsArray, batchSize) => {
    const batchArray = functionsArray.reduce((accumulator, element, index) => {
        const batchIndex = Math.floor(index / batchSize)
        if (Array.isArray(accumulator[batchIndex])) {
          accumulator[batchIndex].push(element)
        } else {
          accumulator.push([element])
        }
        return accumulator
    }, [])

    const results = await batchArray.reduce(async (previousBatch, currentBatch, index) => {
        await previousBatch;
        const currentBatchPromises = currentBatch.map(asyncFunction => asyncFunction())
        const result = await Promise.all(currentBatchPromises)
    }, Promise.resolve())

    return results
}