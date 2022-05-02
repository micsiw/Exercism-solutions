// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let limesWedges = [];
  limes.forEach(howMuchWedges);

  function howMuchWedges(limes) {
    switch (limes) {
      case 'small':
        limesWedges.push(6);
        break;
      case 'medium':
        limesWedges.push(8);
        break;
      case 'large':
        limesWedges.push(10);
        break;
    }  
  }

  let i = 0;
  let sum = 0; //how much wadges we got
  let howMuchLimes = 0;
  
  while (i < limesWedges.length && wedgesNeeded > 0) {

    if (sum >= wedgesNeeded){

      break;

    } 

    sum += limesWedges[i];
    i++;
    howMuchLimes++;

  }
  
  return howMuchLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let ordersTime = [];
  orders.forEach(countingOrders);

  function countingOrders(orders){
    switch (orders) {
    case 'Pure Strawberry Joy':
      ordersTime.push(0.5);
      break;
    case 'Energizer':
      ordersTime.push(1.5);
      break;
    case 'Green Garden':
      ordersTime.push(1.5);
      break;
    case 'Tropical Island':
      ordersTime.push(3);
      break;
    case 'All or Nothing':
      ordersTime.push(5);
      break;
    default:
      ordersTime.push(2.5);
      break; 
    }
  }

  let i = 0;
  let sum = 0;

  while (i < ordersTime.length){

    orders.shift();
    sum += ordersTime[i];
    i++;
    
    if (sum >= timeLeft){

      break;

    }
  }

  return orders;
}
