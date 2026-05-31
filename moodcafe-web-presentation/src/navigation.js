export function createWheelNavigator({
  threshold = 80,
  cooldownMs = 650,
  resetMs = 100,
  onNavigate,
}) {
  let wheelAccX = 0;
  let wheelAccY = 0;
  let resetTimer = null;
  let nextAllowedAt = 0;
  let lastDirection = 0;

  const resetWheel = () => {
    wheelAccX = 0;
    wheelAccY = 0;
  };

  const scheduleReset = () => {
    clearTimeout(resetTimer);
    resetTimer = setTimeout(resetWheel, resetMs);
  };

  const handleWheel = (event) => {
    event.preventDefault?.();

    const now = event.timeStamp ?? performance.now();
    const dominantDelta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    const incomingDirection = dominantDelta > 0 ? 1 : -1;

    if (now < nextAllowedAt) {
      if (incomingDirection !== lastDirection) {
        resetWheel();
      }
      return;
    }

    wheelAccX += event.deltaX;
    wheelAccY += event.deltaY;

    if (Math.abs(wheelAccX) > threshold || Math.abs(wheelAccY) > threshold) {
      const activeDelta =
        Math.abs(wheelAccX) > Math.abs(wheelAccY) ? wheelAccX : wheelAccY;
      const direction = activeDelta > 0 ? 1 : -1;

      onNavigate(direction);
      lastDirection = direction;
      nextAllowedAt = now + cooldownMs;
      resetWheel();
      clearTimeout(resetTimer);
      return;
    }

    scheduleReset();
  };

  const destroy = () => {
    clearTimeout(resetTimer);
  };

  return { handleWheel, destroy };
}
