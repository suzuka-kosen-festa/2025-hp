/**
 *
 * @param {{summary: Record<string, number>}[]} manifest
 */
function main(manifest) {
  return manifest
    .map((result) => {
      const summary = result.summary;
      const kv = Object.entries(summary).map(([key, value]) => {
        const score = value * 100;
        const emoji = score >= 90 ? "🟢" : score >= 50 ? "🟠" : "🔴";
        return [key, `${emoji} ${score}`];
      });
      const keys = kv.map(v => v[0]);
      const values = kv.map(v => v[1]);
      // to markdown table
      const header = `|${keys.join("|")}|`;
      const row = `|${values.join("|")}|`;
      const output
        = `${header}\n` + `|${kv.map(() => "---").join("|")}|` + `\n${row}`;
      return output;
    })
    .join("\n\n");
}
export default main;
