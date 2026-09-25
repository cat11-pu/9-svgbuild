// render.js：渲染指令与预算
const VISITS_PER_POINT = 2; // 写死上限：每个原始点最多允许访问两次

export function toInstructions(path) {
  return path.commands.map((cmd) => cmd.join(" "));
}

export function budget(path) {
  const visited = path.visited;
  return { visited: visited, limit: visited * VISITS_PER_POINT };
}
