// render.js：渲染指令与预算
export function toInstructions(path) {
  return path.commands.map((cmd) => cmd.join(" "));
}

export function budget(path) {
  const visited = path.visited;
  return { visited: visited, limit: visited * 2 };
}
