export function bubbleSort(items) {
    const length = items.length
    let noSwaps
  
    for (let i = length; i > 0; i--) {
      // Флаг для оптимизации
      noSwaps = true
      // Number of passes
      for (let j = 0; j < i - 1; j++) {
        // Compare the adjacent positions
        if (items[j] > items[j + 1]) {
          // Swap the numbers
          ;[items[j], items[j + 1]] = [items[j + 1], items[j]]
          noSwaps = false
        }
      }
      if (noSwaps) {
        break
      }
    }
  
    return items
  }