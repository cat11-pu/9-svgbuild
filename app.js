// app.js：渲染结果
import { buildPath } from "./path.js";
import { toInstructions, budget } from "./render.js";

export function render(spec) {
  const path = buildPath(spec.points, spec.closed);
  const cost = budget(path);
  return { commands: path.commands, instructions: toInstructions(path),
           simplified: path.simplified, loop_closed: path.loop_closed,
           visited: cost.visited, limit: cost.limit };
}
