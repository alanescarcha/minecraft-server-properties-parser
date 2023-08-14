import { McPropertiesParserError } from './McPropertiesParserError';
import { extname } from "path";

export const readPropertiesFromString = (content: string, configPath: string): Array<string> => {
    if (extname(configPath) !== ".properties") {
        throw new McPropertiesParserError(`Can not parse properties file with extension : ${extname(configPath)}, please provide a .properties file`);
    }
    
    return content.split(/\r?\n/);
};
