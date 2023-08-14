import { parsePropertiesStringToJson } from '../parsePropertiesFileToJson';
import { join } from 'path';
import { getUpdatedPropertiesContent } from '../getUpdatedPropertiesContent';

test("Updated content should match initial object", () => {
    const initialPropertiesContent = `broadcast-rcon-to-ops=true\nview-distance=10\nmax-build-height=256`;

    const originalProperties = parsePropertiesStringToJson(initialPropertiesContent, join(__dirname, "./../test_data/server.properties"));

    const updatedContent = getUpdatedPropertiesContent(originalProperties);

    const outputPath = join(__dirname, "./test_data/output/server.properties");
    const outputProperties = parsePropertiesStringToJson(updatedContent, outputPath);

    expect(originalProperties).toMatchObject(outputProperties);
});
