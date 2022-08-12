console.clear();

const {
  core: { describe, it, expect, run },
  prettify
} = window.jestLite;

// These are the tests you are trying to make pass, if you choose to use the test suite.
describe("isAllUniq(chars)", () => {
  it("latin", () => {
    expect(isAllUniq("Code")).toBe(true);
    expect(isAllUniq("Pen")).toBe(true);
    expect(isAllUniq("CodePen")).toBe(false); // dup e
    expect(isAllUniq("Challenge")).toBe(false); // dup l
  });
  it("emoji", () => {
    expect(isAllUniq("🦊🦘🦥🐶")).toBe(true);
    expect(isAllUniq("🦊🦘🦥🦊")).toBe(false); // dup 🦊
  });
});

prettify.toHTML(run(), report);

setTimeout(() => {
  impl.textContent = impl.textContent
    .split("\n")
    .slice(1, -1)
    .map((r) => r.replace(/^\s{6}/, ""))
    .join("\n");
  document.querySelector('#report')
    .parentElement
    .scrollIntoView({ behavior: 'smooth', block: 'center' })
}, 10);
