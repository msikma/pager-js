// pager-js <https://github.com/msikma/pager-js>
// Copyright © 2018, Michiel Sikma. MIT license.

import fetchPage from './process/fetch'
import inlineResources from './process/resources'
import { savePage } from './process/save'

// Runs a single action from the command line, prints the result and then exits.
export const cli = async args => {
  // Don't run this unless we came from the command line.
  if (process.env.PAGER_JS_CLI !== '1') {
    throw new Error('Cannot use cli() except from the pager-cli command line utility')
  }

  if (!args.urls.length) {
    console.error('pager-cli: error: pass at least one URL')
    process.exit(1)
  }

  await runTest()

  //console.error('pager-cli: error: not implemented yet')
}

const runTest = async _ => {
  // Fixme: temp url
  const content = await fetchPage('file:///Users/msikma/Projects/pager-js/test/01_red_blue.html')
  const processedContent = await inlineResources(content)
  await savePage('./01_red_blue_archive.html', processedContent)
  console.log('done')
}

