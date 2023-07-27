import { expect } from '@jest/globals'
import { readFile } from "fs/promises";
import path from "path";

import { Alert } from "../../../dist/node/CAP-1-2";

describe("XML parsing", () => {
  it.each([
    // optional-properties-1 misses a few properties that are defined as optional
    // the lib shall therefore not throw an error
    'optional-properties-1.xml',
  ])("parses without error", async (xmlDocPath) => {
    const xmlDocument = await readFile(path.join(__dirname, xmlDocPath));

    const parsed = await Alert.fromXML(xmlDocument);
    expect(parsed).toBeInstanceOf(Alert);
  });
});
