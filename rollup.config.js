import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import {
    terser
} from "rollup-plugin-terser";

export default {
    input: "./src/index.ts",
    output: {
        file: "dist/index.bundle.min.js",
        format: "umd",
        name: "typescript-quickstart",
        sourcemap: true
    },
    plugins: [
        typescript(),
        resolve(),
        json(),
        commonjs(),
        terser()
    ]
}
