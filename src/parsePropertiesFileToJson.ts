import { PropertiesFile } from './types/PropertiesFile';
import { readPropertiesFromString } from './utils/readPropertiesFromString';

export const parsePropertiesStringToJson = (propertiesContent: string, propertiesPath: string): PropertiesFile => {
    const parsedConfigToArray = readPropertiesFromString(propertiesContent, propertiesPath);
    const parsedConfigToJson: PropertiesFile  = {};
    
    parsedConfigToArray.forEach((line: string) => {
        if (!line.trim().startsWith("#")) {
            const parsedLine = line.split("=");
            const key = parsedLine[0];
            const value = parsedLine[1];

            if (key) {
                const parsedValue = value === "null" ? "" : convertStringToActualType(value);
                Object.assign(parsedConfigToJson, { [key]: parsedValue });
            }
        }
    });
    
    return parsedConfigToJson;
};



const convertStringToActualType = (value: string): boolean | string | number | null | undefined => {
    const trimmedValue = value.trim();

    if (trimmedValue === "null") {
        return "";
    }

    if (["true", "false"].includes(trimmedValue)) {
        return value === "true";
    }

    if (!isNaN(parseInt(trimmedValue))) {
        return parseInt(trimmedValue);
    }

    return trimmedValue;
};
