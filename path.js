// path.js：路径构建（合并共线中间点，端点与转折点保留）
export function buildPath(points, closed) {
  const kept = [];
  for (let index = 0; index < points.length; index++) {
    kept.push(points[index]);
    while (kept.length >= 3) {
      const a = kept[kept.length - 3];
      const b = kept[kept.length - 2];
      const c = kept[kept.length - 1];
      const abx = b[0] - a[0];
      const aby = b[1] - a[1];
      const bcx = c[0] - b[0];
      const bcy = c[1] - b[1];
      const cross = abx * bcy - aby * bcx;
      const dot = abx * bcx + aby * bcy;
      if (cross === 0 && dot > 0) {
        kept.splice(kept.length - 2, 1);
      } else {
        break;
      }
    }
  }
  const commands = kept.map(function (point, index) {
    return [index === 0 ? "M" : "L", point[0], point[1]];
  });
  if (closed) {
    commands.push(["Z"]);
  }
  return { commands: commands, simplified: kept.length,
           loop_closed: Boolean(closed), visited: points.length };
}
