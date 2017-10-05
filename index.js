/*
 * Exercise: Refactor the code!
 *
 * This file is a collection of functions you've been asked to refactor.
 *
 * The primary purpose of this exercise is to use your judgement to decide when
 * and where to introduce appropriate abstractions, and whether you can use
 * either abstractions provided by JavaScript, or write your own.
 *
 * Advice:
 * + Try to recognise common patterns in the code.
 * + When you have recognised a pattern, think about if you could make a
 *   function to encapsulate it, instead of repeating code in several places.
 */

'use strict'; //wont run bad syntax, will pop up as an error//



function capitaliseObjectKeys (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const capitalisedKey = keys[ii].slice(0, 1).toUpperCase().concat(keys[ii].slice(1));
    result[capitalisedKey] = input[keys[ii]];
  }

  return result;
}

//capitalises first letter of key input and spits it out in a new object called result//


function capitaliseObjectValues (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const value = input[keys[ii]];
    const capitalisedValue = value.slice(0, 1).toUpperCase().concat(value.slice(1));
    result[keys[ii]] = capitalisedValue;
  }

  return result;
}

//capitalises value input and spits it out into an object called result//

function incrementObjectValues (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const value = input[keys[ii]];
    result[keys[ii]] = value + 1;
  }

  return result;
}

//adding one to each value in the object//

function reverseObjectKeys (input) {
  const keys = Object.keys(input);
  const result = {};

  for (var ii = 0; ii < keys.length; ii++) {
    const reversedKey = keys[ii].split('').reverse().join('');
    result[reversedKey] = input[keys[ii]];
  }

  return result;
}

//spits all keys back into the object in the opposite order to what they were already in//
