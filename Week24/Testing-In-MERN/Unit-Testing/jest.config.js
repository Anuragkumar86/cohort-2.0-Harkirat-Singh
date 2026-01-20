// jest.config.js
import { createDefaultPreset } from "ts-jest";

const tsJestPreset = createDefaultPreset();

/** @type {import("jest").Config} */
export default {
  testEnvironment: "node",
  transform: tsJestPreset.transform,
};
