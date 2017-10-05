function capitalise (str) {
  return str.slice(0, 1).toUpperCase().concat(str.slice(1));
}

function capitaliseObjectKeys (input) {
  return Object.keys(input)
    .reduce(function (acc, key) {
      acc[capitalise(key)] = input[key];
      return acc;
    }, {});
}


function capitaliseObjectValues (input) {
  return Object.keys(input)
    .reduce(function (acc, key) {
      acc[key] = capitalise(input[key]);
      return acc;
    }, {});
}

function incrementObjectValues (input) {
  return Object.keys(input)
    .reduce(function (acc, key) {
      acc[key] = input[key] + 1;
      return acc;
    }, {});
}

function reverseObjectKeys (input) {
  return Object.keys(input)
    .reduce(function (acc, key) {
      const reversedKey = key.split('').reverse().join('');
      acc[reversedKey] = input[key];
      return acc;
    }, {});
}
