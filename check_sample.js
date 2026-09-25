import fs from "node:fs";
import { buildPath } from "./path.js";
import { toInstructions, budget } from "./render.js";
import { render } from "./app.js";

const spec = JSON.parse(fs.readFileSync(process.argv[2] || "sample/path.json", "utf8"));
const path = buildPath(spec.points, spec.closed);
const cost = budget(path);
const view = render(spec);

console.log("指令序列 =", JSON.stringify(path.commands));
console.log("指令条数 =", path.commands.length);
console.log("原始点数 =", spec.points.length);
console.log("简化后点数 =", path.simplified);
console.log("是否闭合 =", path.loop_closed);
console.log("预算（访问点数） =", cost.visited);
console.log("预算上限 =", cost.limit);
console.log("不变量（端点与转折点保留） =", spec.shape_invariant);
