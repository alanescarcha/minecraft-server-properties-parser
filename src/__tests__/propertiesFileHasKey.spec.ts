import { parsePropertiesStringToJson } from '../parsePropertiesFileToJson'; // Importar la función actualizada
import { propertiesFileHasKey } from "../propertiesFileHasKey";
import { join } from "path";

test("Properties content should have key", () => {
    const key = 'view-distance';
    const propertiesContent = `broadcast-rcon-to-ops=true\nview-distance=10\nmax-build-height=256\nserver-ip=0.0.0.0\nplayer-position-acceptance-threshold=0.5`;

    // Convertir el contenido simulado en objeto de propiedades
    const properties = parsePropertiesStringToJson(propertiesContent, join(__dirname, "./../test_data/server.properties"));

    expect(propertiesFileHasKey(properties, key)).toBe(true);
});

test("Properties content should not have key", () => {
    const key = 'keyNotContain';
    const propertiesContent = `broadcast-rcon-to-ops=true\nview-distance=10\nmax-build-height=256\nserver-ip=0.0.0.0\nplayer-position-acceptance-threshold=0.5`;

    // Convertir el contenido simulado en objeto de propiedades
    const properties = parsePropertiesStringToJson(propertiesContent, join(__dirname, "./../test_data/server.properties"));

    expect(propertiesFileHasKey(properties, key)).toBe(false);
});
