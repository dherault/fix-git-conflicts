export type Strategy = 'ours' | 'theirs'

function fixAllConflicts(code: string, strategy: Strategy): string {
  const lines = code.split('\n')

  const deletedIndexes: number[] = []
  let currentConflictStrategy: Strategy | null = null

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('<<<<<<<')) {
      currentConflictStrategy = 'ours'
      deletedIndexes.push(i)
      continue
    }

    if (line.startsWith('=======')) {
      currentConflictStrategy = 'theirs'
      deletedIndexes.push(i)
      continue
    }

    if (line.startsWith('>>>>>>>')) {
      currentConflictStrategy = null
      deletedIndexes.push(i)
      continue
    }

    if (!currentConflictStrategy || currentConflictStrategy === strategy) continue

    deletedIndexes.push(i)
  }

  // Remove the lines that are marked for deletion
  for (let i = deletedIndexes.length - 1; i >= 0; i--) {
    lines.splice(deletedIndexes[i], 1)
  }

  return lines.join('\n')
}

export default fixAllConflicts
