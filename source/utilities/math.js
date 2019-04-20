/**
 * Get the angle in degrees between two objects.
 * @param {Object} from
 * @param {Object} to
 */
export function getAngleBetween (from, to) {
  return Math.atan2(
    to.y - from.y,
    to.x - from.x
  ) * 180 / Math.PI
}
