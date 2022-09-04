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

    let howManySauce = 0;
    let howManyNoodles = 0;

    for (let i = 0; i < layers.length; i++) {
        if (layers[i] === 'noodles') howManyNoodles++;
    }

    for (let i = 0; i < layers.length; i++) {
        if (layers[i] === 'sauce') howManySauce++;
    }

    return {
        noodles: howManyNoodles * 50,
        sauce: howManySauce * 0.2,
    };
}

export function addSecretIngredient(friendsList, myList) {

    let secretIngredient = friendsList.slice(-1);
    secretIngredient = secretIngredient.toString();
    
    myList.push(secretIngredient);
}

export function scaleRecipe(recipe, portions) {

    let scaled = {...recipe};

    for (let key in scaled) {
        scaled[key] = scaled[key] / 2 * portions;
    }

    return scaled;
}