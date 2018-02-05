export const RING_CLOCKWISE = false;
export const TOP_OF_CIRCLE = 1.5 * Math.PI;

interface Coords {
  x: number;
  y: number;
}

export const centers = (width: number, height: number): Coords => ({x: width / 2, y: height / 2});
export const radius = (width: number, height: number) => Math.min(width, height) / 2;
export const progressRadians = (progress: number) => TOP_OF_CIRCLE + progress * 2 * Math.PI;

export default (context: CanvasRenderingContext2D, devicePixelRatio: number, progress: number) => {
  context.beginPath();
  const {width, height} = context.canvas;
  const {x, y} = centers(width, height); 
  context.arc(
    x,
    y,
    radius(width, height) - devicePixelRatio, 
    TOP_OF_CIRCLE,
    progressRadians(progress),
    RING_CLOCKWISE
  );
  context.stroke();
};
