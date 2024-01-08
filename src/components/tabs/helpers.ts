export function getRunTime(minutes: number) {
  const hours = Math.floor(minutes / 60);
  if (!hours) {
    return `${minutes}m`;
  }
  return `${hours}h ${minutes % 60}m`;
}
