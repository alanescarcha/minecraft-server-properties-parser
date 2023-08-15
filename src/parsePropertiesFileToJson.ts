import { PropertiesFile } from './types/PropertiesFile';
import { readPropertiesFromString } from './utils/readPropertiesFromString';

const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

export const parsePropertiesStringToJson = (propertiesContent: string, propertiesPath: string): PropertiesFile => {
    const parsedConfigToArray = readPropertiesFromString(propertiesContent, propertiesPath);
    const parsedConfigToJson: PropertiesFile  = {};
    
    parsedConfigToArray.forEach((line: string) => {
        if (!line.trim().startsWith("#")) {
            const parsedLine = line.split("=");
            const key = parsedLine[0];
            const value = parsedLine[1];

            if (key) {
                const parsedValue = (value === null || value === "null" || value === "") ? "" : convertStringToActualType(value);
                Object.assign(parsedConfigToJson, { [key]: parsedValue });
            }
        }
    });
    
    return parsedConfigToJson;
};



const convertStringToActualType = (value: string): boolean | string | number | null | undefined => {
    const trimmedValue = value.trim();

    if (trimmedValue === "null" || trimmedValue === null || trimmedValue === "") {
        return "";
    }

    if (ipv4Pattern.test(trimmedValue)) {
        return trimmedValue;
    }

    if (["true", "false"].includes(trimmedValue)) {
        return value === "true";
    }

    if (!isNaN(parseInt(trimmedValue))) {
        return parseInt(trimmedValue);
    }

    return trimmedValue;
};
