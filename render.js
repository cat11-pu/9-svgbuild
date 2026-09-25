// render.js：渲染指令（基线：不合并、不报预算）
export function toInstructions(path) {
  return path.commands.map((cmd) => cmd.join(" "));
}

export function budget(path) {
  return { visited: path.commands.length, limit: path.commands.length };
}
