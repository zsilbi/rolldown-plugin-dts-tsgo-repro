import { defineConfig } from "rolldown";
import { dts } from "rolldown-plugin-dts";

export default defineConfig({
  input: ["./src/index.js"],
  plugins: [dts({ tsgo: "." })],
});
