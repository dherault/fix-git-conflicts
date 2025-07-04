import { describe, expect, test } from '@jest/globals'

import fixAllConflicts from './index'

describe('fixAllConflicts', () => {

  test('should behave as identity if no conflicts', () => {
    const code = 'abc'

    expect(fixAllConflicts(code, 'ours')).toBe(code)
    expect(fixAllConflicts(code, 'theirs')).toBe(code)
  })

  test('should fix conflicts 1', () => {
    const code = `
\<<<<<<< HEAD
Hello, universe!
=======
Hello, Git!
>>>>>>> feature
`

    expect(fixAllConflicts(code, 'ours')).toBe(`
Hello, universe!
`)
    expect(fixAllConflicts(code, 'theirs')).toBe(`
Hello, Git!
`)
  })

  test('should fix conflicts 2', () => {
    const code = `
Just saying:
\<<<<<<< HEAD
Hello, universe!
=======
Hello, Git!
>>>>>>> feature
To you.
`

    expect(fixAllConflicts(code, 'ours')).toBe(`
Just saying:
Hello, universe!
To you.
`)
    expect(fixAllConflicts(code, 'theirs')).toBe(`
Just saying:
Hello, Git!
To you.
`)
  })

  test('should fix conflicts 3', () => {
    const code = `
Just saying:
\<<<<<<< HEAD
Hello, universe!
=======
Hello, Git!
>>>>>>> feature
To you.
\<<<<<<< HEAD
What's up?
=======
How are you doing?
>>>>>>> feature
Friend.
`

    expect(fixAllConflicts(code, 'ours')).toBe(`
Just saying:
Hello, universe!
To you.
What's up?
Friend.
`)
    expect(fixAllConflicts(code, 'theirs')).toBe(`
Just saying:
Hello, Git!
To you.
How are you doing?
Friend.
`)
  })

  test('should fix conflicts 4', () => {
    const code = `
Just saying:
\<<<<<<< HEAD
Hello, universe!
I say that.
=======
Hello, Git!
>>>>>>> feature
To you.
\<<<<<<< HEAD
What's up?
=======
I say this.
How are you doing?
>>>>>>> feature
Friend.
`

    expect(fixAllConflicts(code, 'ours')).toBe(`
Just saying:
Hello, universe!
I say that.
To you.
What's up?
Friend.
`)
    expect(fixAllConflicts(code, 'theirs')).toBe(`
Just saying:
Hello, Git!
To you.
I say this.
How are you doing?
Friend.
`)
  })

})
