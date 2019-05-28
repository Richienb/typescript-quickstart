import { TypeScriptQuickStart } from "../src/index"

test("helloWorld returns text", () => {
    expect(new TypeScriptQuickStart().helloWorld("Hello World!")).toBe("Hello World!");
});
