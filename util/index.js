/**
 *
 * @param {number} timestamp
 * @returns {string}
 */
export function timestampToDateString(timestamp) {
  const event = new Date(timestamp);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return event.toLocaleDateString('en-EN', options);
}

/**
 *
 * @param {number} milliseconds
 * @returns {string}
 */
export function millisecondsToTimeString(milliseconds) {
  const overallSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(overallSeconds / 60);
  const seconds = overallSeconds % 60;

  let timeString = `${String(seconds).padStart(2, '0')}s`;

  if (minutes) {
    timeString = `${minutes}m ${timeString}`;
  }

  return timeString;
}
