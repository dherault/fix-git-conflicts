import { describe, expect, test } from '@jest/globals'

import fixAllConflicts from './index'

describe('fixAllConflicts', () => {

  test('should behave as identity if no conflicts', () => {
    const code = 'abc'

    expect(fixAllConflicts(code)).toBe(code)
  })

})
