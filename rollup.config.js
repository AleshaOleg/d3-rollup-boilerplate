import resolve from "rollup-plugin-node-resolve"
import { uglify } from "rollup-plugin-uglify"

export default {
  input: "src/index.js",
  output: {
    compact: true,
    file: "lib/index.js",
    format: "esm",
  },
  plugins: [resolve(), uglify()]
}
