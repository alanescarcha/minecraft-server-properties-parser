import { PropertiesFile } from "./types/PropertiesFile";
import { stringifyProperties } from "./utils/stringifyProperties";

export const getUpdatedPropertiesContent = (properties: PropertiesFile): string => {
    return stringifyProperties(properties);
};
