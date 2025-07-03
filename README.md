# Fix git conflicts

A NPM package to fix all git conflicts of a file at once.

## Installation

`npm i fix-git-conflicts`

## Usage

```ts
import fixAllConflicts from 'fix-git-conflicts'

const code = fs.readFileSync('/file/with/conflicts')
const codeOurs = fixAllConflicts(code, 'ours') // Remove conflicts with 'ours' strategy
const codeTheirs = fixAllConflicts(code, 'theirs') // Same with 'theirs'
```

## License

MIT
