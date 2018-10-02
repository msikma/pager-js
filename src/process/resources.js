// pager-js <https://github.com/msikma/pager-js>
// Copyright © 2018, Michiel Sikma. MIT license.

import cheerio from 'cheerio'
import { fetchTextResource } from './fetch'

const inlineResources = async (content) => {
  const $ = cheerio.load(content)
  await inlineCSSLinks($)
  return $.html()
}

const inlineCSSLinks = async ($) => {
  const $links = $('link[rel="stylesheet"], link[href$="css"]')
  return Promise.all($links.get().map(async link => {
    const $link = $(link)
    const href = $link.attr('href')
    // Test: using hardcoded local link
    const body = await fetchTextResource('./test/01_red_blue.css')
    $link.replaceWith(makeInlineCSS(body))
  }))
}

const makeInlineCSS = (body) => (
  `<style type="text/css" media="screen">
  /* inlined by pager-js */
  ${body}
  </style>`
).trim()

export default inlineResources
