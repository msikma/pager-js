// pager-js <https://github.com/msikma/pager-js>
// Copyright © 2018, Michiel Sikma. MIT license.

import puppeteer from 'puppeteer'
import { readFileAsync } from '../util/promisified/fs'

// Retrieves a single page from a URL or local file.
const fetchPage = async (url) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  const content = await page.content()
  await browser.close();
  return content
}

export const fetchTextResource = async (url) => {
  // Fixme: should possibly get the content from our earlier puppeteer page.
  /*const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)
  const content = await page.content()
  await browser.close();
  return content*/
  // temp
  const content = await readFileAsync(url, 'utf8')
  return content
}

export default fetchPage
