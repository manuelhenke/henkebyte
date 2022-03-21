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

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
