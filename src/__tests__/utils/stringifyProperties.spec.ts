import { parsePropertiesStringToJson } from '../../parsePropertiesFileToJson';
import { join } from 'path';
import { stringifyProperties } from '../../utils/stringifyProperties';

test("Stringified properties content should match", () => {
    const expected = `broadcast-rcon-to-ops=true\nview-distance=10\nmax-build-height=256\nserver-ip=0.0.0.0\nplayer-position-acceptance-threshold=0.5`;

    // Simular el contenido del archivo como una cadena
    const propertiesContent = `broadcast-rcon-to-ops=true\nview-distance=10\nmax-build-height=256\nserver-ip=0.0.0.0\nplayer-position-acceptance-threshold=0.5`;
    
    const properties = parsePropertiesStringToJson(propertiesContent, join(__dirname, "./../test_data/server.properties"));

    expect(stringifyProperties(properties)).toEqual(expected);
});
