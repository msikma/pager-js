// common - Utilities for msikma library projects <https://github.com/msikma/msikma-lib-projects>
// Copyright © 2018, Michiel Sikma. MIT license.

// Ensures that a string ends with a period.
export const ensurePeriod = (str) => {
  if (str.slice(-1) === '.') return str
  return `${str}.`
}

// Returns only the first line of a multiline string.
export const getFirstLine = (str) => {
  return str.split('\n')[0]
}
