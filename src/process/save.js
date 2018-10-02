// pager-js <https://github.com/msikma/pager-js>
// Copyright © 2018, Michiel Sikma. MIT license.

import { writeFile } from 'fs'

// Saves an archived page as a new file.
export const savePage = (path, content) => new Promise((resolve, reject) => {
  writeFile(path, content, () => resolve())
})
