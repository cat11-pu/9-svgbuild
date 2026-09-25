// path.js：路径构建（共线点合并：相邻三点同向则去掉中间点，端点与转折点保留）
function collinearSameDirection(a, b, c) {
  const abx = b[0] - a[0];
  const aby = b[1] - a[1];
  const bcx = c[0] - b[0];
  const bcy = c[1] - b[1];
  const cross = abx * bcy - aby * bcx;
  const dot = abx * bcx + aby * bcy;
  return cross === 0 && dot >= 0;
}

export function buildPath(points, closed) {
  const kept = [];
  for (let i = 0; i < points.length; i += 1) {
    kept.push(points[i]);
    while (kept.length >= 3 &&
           collinearSameDirection(kept[kept.length - 3], kept[kept.length - 2], kept[kept.length - 1])) {
      kept.splice(kept.length - 2, 1);
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
