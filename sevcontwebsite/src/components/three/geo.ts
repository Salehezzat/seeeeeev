import { Vector3 } from "three";

export function latLngToVector3(lat: number, lng: number, radius: number): Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new Vector3(x, y, z);
}

export function quadraticBezier(
  p0: Vector3,
  p1: Vector3,
  p2: Vector3,
  t: number
): Vector3 {
  const oneMinusT = 1 - t;
  return new Vector3(
    oneMinusT * oneMinusT * p0.x + 2 * oneMinusT * t * p1.x + t * t * p2.x,
    oneMinusT * oneMinusT * p0.y + 2 * oneMinusT * t * p1.y + t * t * p2.y,
    oneMinusT * oneMinusT * p0.z + 2 * oneMinusT * t * p1.z + t * t * p2.z
  );
}

export function arcControlPoint(p0: Vector3, p2: Vector3, radius: number, lift: number): Vector3 {
  const mid = p0.clone().add(p2).multiplyScalar(0.5);
  return mid.normalize().multiplyScalar(radius * lift);
}
