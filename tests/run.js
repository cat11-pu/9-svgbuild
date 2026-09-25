import assert from "node:assert";
import { buildPath } from "../path.js";
import { toInstructions, budget } from "../render.js";
import { render } from "../app.js";

let failed = 0;
function check(name, fn) {
  try { fn(); console.log("ok   " + name); } catch (e) { failed += 1; console.log("FAIL " + name + " :: " + e.message); }
}

const points = [[0, 0], [1, 0], [1, 1]];

check("first command is move", () => {
  assert.strictEqual(buildPath(points, false).commands[0][0], "M");
});

check("command count matches points", () => {
  assert.strictEqual(buildPath(points, false).commands.length, 3);
});

check("instructions are strings", () => {
  assert.strictEqual(typeof toInstructions(buildPath(points, false))[0], "string");
});

check("budget has limit", () => {
  assert.strictEqual(typeof budget(buildPath(points, false)).limit, "number");
});

check("render exposes simplified", () => {
  assert.strictEqual(render({ points: points, closed: false }).simplified, 3);
});

console.log("5 cases, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
