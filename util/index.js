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
