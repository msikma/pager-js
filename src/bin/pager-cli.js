#!/usr/bin/env node
// pager-js <https://github.com/msikma/pager-js>
// Copyright © 2018, Michiel Sikma. MIT license.

import '@babel/polyfill'
import makeArgParser from '../util/argparse'
import { ensurePeriod } from '../util/text'

const packageData = require('../../package.json')
const parser = makeArgParser({
  addHelp: true,
  description: ensurePeriod(packageData.description),
  epilog: `For more information, see <${packageData.homepage}>.`,
  version: packageData.version
})

parser.addArgument(['urls'], { help: 'URL(s) or local files to process.', nargs: '+' })

const args = { ...parser.parseArgs() }

// The cli() function is only for the command line. Make sure we remember we came from there.
process.env.PAGER_JS_CLI = '1'
require('../index').cli(args)
