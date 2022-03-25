/**
 *
 * @param {number} timestamp
 * @returns {string}
 */
export function timestampToDateString(timestamp) {
  const event = new Date(timestamp)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return event.toLocaleDateString('en-EN', options)
}

/**
 *
 * @param {string} string
 * @returns {boolean}
 */
export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 *
 * @param {*[]} a
 * @param {*[]} b
 * @returns {boolean}
 */
export function arrayEquals(a, b) {
  if (a === b) return true
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((v, i) => v === b[i])
  )
}
