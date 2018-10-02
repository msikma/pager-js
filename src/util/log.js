// pager-js <https://github.com/msikma/pager-js>
// Copyright © 2018, Michiel Sikma. MIT license.

import chalk from 'chalk'

let useColor = true

const log = (str) => {
  console.log(str)
}

export const logCSS = (origHTML, parent) => {
  log(`Inlining: ${colorOrigHTML(origHTML)} in ${colorParent(parent)}: ${colorResolution('creating inline <style> tag')}`)
}

const colorOrigHTML = str => (
  `${chalk.blue(str)}`
)

const colorParent = str => (
  `${chalk.green(str)}`
)

const colorResolution = str => (
  `${chalk.yellow(str)}`
)

// Turns colors on or off.
export const setColorUsage = (toggle) => {
  useColor = toggle
}

export default log
