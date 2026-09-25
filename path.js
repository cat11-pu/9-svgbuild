// path.js：路径构建（基线：每个点都出一条指令，不简化）
export function buildPath(points, closed) {
  const commands = points.map(function (point, index) {
    return [index === 0 ? "M" : "L", point[0], point[1]];
  });
  return { commands: commands, simplified: points.length, loop_closed: false };
}
