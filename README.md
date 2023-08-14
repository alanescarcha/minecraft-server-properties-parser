# minecraft-server-properties-parser

An API for parsing, stringifying & write the Minecraft server.properties file format

## Installation

```shell
# npm
npm install minecraft-server-properties-parser

# yarn
yarn add minecraft-server-properties-parser
```



## Usage

### parsePropertiesStringToJson

| Name                      | Return                  | Description                                                  |
| ------------------------- | ----------------------- | ------------------------------------------------------------ |
| parsePropertiesStringToJson | Json<PropertiesFile> | parsePropertiesStringToJson allow you to get the json conversion of a .properties file |

#### args

| Parameter         | Type   | Description                                     | Required |
| ------------------| ------ | ------------------------------------------------| -------- |
| propertiesContent | string | content to parse                                | True     |
| propertiesPath    | string | pth of the file to chick if it's a .properties  | True     |

#### example

```typescript
const content = `
    broadcast-rcon-to-ops=true,
    view-distance=10,
    max-build-height=256
`

import {parsePropertiesStringToJson} from "minecraft-server-properties-parser"
const parsePropertiesStringToJson = await parsePropertiesStringToJson(content, path)

```



### propertiesFileHasKey

| Name                 | Return  | Description                                       |
| -------------------- | ------- | ------------------------------------------------- |
| propertiesFileHasKey | Boolean | Check if a properties file contain a specific key |

#### args

| Parameter      | Type           | Description                     | Required |
| -------------- | -------------- | ------------------------------- | -------- |
| propertiesFile | PropertiesFile | properties file object to check | True     |
| key            | string         | key to check if exist           | True     |

#### example

```typescript
import {propertiesFileHasKey} from "minecraft-server-properties-parser"
propertiesFileHasKey(propertiesFile, key)

```



### writePropertiesFile

| Name                | Return        | Description                                          |
| ------------------- | ------------- | ---------------------------------------------------- |
| writePropertiesFile | Promise<void> | Write a properties file object as a .properties file |

#### args

| Parameter    | Type           | Description                         | Required |
| ------------ | -------------- | ----------------------------------- | -------- |
| *properties* | PropertiesFile | properties file object to check     | True     |
| path         | string         | path where the file will be written | True     |

#### example

```typescript
import {writePropertiesFile} from "minecraft-server-properties-parser"
// it can be the same path from the actual edited file and will replace the old with the new changes
await writePropertiesFile(properties, path)

```

