/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus (timer) {
    if (timer === 0) {
        return 'Lasagna is done.';
    } else if (timer > 0) {
        return 'Not done, please wait.';
    } else {
        return 'You forgot to set the timer.';
    }
 }

export function preparationTime (layers, timePerLayer = 2) {
    const howManyLayers = layers.length;

    return howManyLayers * timePerLayer;
}

export function quantities (layers) {
    const howManyLayers = layers.length;
    let howManyNoodles = 0;
    layers.forEach(countNoodles);

    function countNoodles (noodles) {
        if (layers === 'noodles') {
            howManyNoodles += noodles;
        }
    }


    return {
        noodles: howManyNoodles * 50,
        sauce: howManyLayers * 0.2,
    };
}