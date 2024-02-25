import { readPropertiesFromString } from '../../utils/readPropertiesFromString';
import { parsePropertiesStringToJson } from '../../parsePropertiesFileToJson';
import { join } from "path";

test("Expected properties content should match", () => {
    const expectedContent = `broadcast-rcon-to-ops=true\nview-distance=10\nmax-build-height=256\nserver-ip=0.0.0.0\nplayer-position-acceptance-threshold=0.5`;

    const configFileContent = expectedContent;

    const expectedProperties = parsePropertiesStringToJson(expectedContent, join(__dirname, "./test_data/output/server.properties"));

    const configFileToArray = readPropertiesFromString(configFileContent, join(__dirname, "./test_data/output/server.properties"));

    const configFileValues = configFileToArray.map(line => {
        const [key, value] = line.split('=');
        return parseValueWithType(value);
    });

    const expectedValues = Object.values(expectedProperties);

    expect(configFileValues).toEqual(expectedValues);
});

function parseValueWithType(value: string): any {
    if (value === "true" || value === "false") {
        return value === "true";
    } else if (!isNaN(Number(value))) {
        return Number(value);
    } else {
        return value;
    }
}
