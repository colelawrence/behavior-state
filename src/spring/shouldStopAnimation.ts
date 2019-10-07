export default function shouldStopAnimation(
  value: number,
  destination: number,
  velocity: number
): boolean {
  if (velocity !== 0) return false;
  // Stepper should take care of precision errors
  if (value !== destination) return false;
  return true;
}
