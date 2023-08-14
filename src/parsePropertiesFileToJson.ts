import { PropertiesFile } from './types/PropertiesFile';
import { readPropertiesFromString } from './utils/readPropertiesFromString';

export const parsePropertiesStringToJson = (propertiesContent: string, propertiesPath: string): PropertiesFile => {
    const parsedConfigToArray = readPropertiesFromString(propertiesContent, propertiesPath);
    const parsedConfigToJson: PropertiesFile  = {};
    
    parsedConfigToArray.forEach((line: string) => {
        const parsedLine = line.split("=");
        const key = parsedLine[0];
        const value = parsedLine[1];
        
        if (key) {
            // Convertir el valor "null" a null, mantener otros valores tal como están
            const parsedValue = value === "null" ? null : convertStringToActualType(value);
            
            Object.assign(parsedConfigToJson, { [key]: parsedValue });
        }
    });
    
    return parsedConfigToJson;
};



const convertStringToActualType = (value: string): boolean | string | number | null | undefined => {
    
    if(!value) return null;

    const trimedValue = value.trim()
    // if string match with boolean
    if (["true", "false"].includes(trimedValue)) {
        return value === "true"
    }
    //if string can be converted to int 
    if(!isNaN(parseInt(trimedValue))) {
        return parseInt(trimedValue)
    }
    // if no match return value
    return value;

}
