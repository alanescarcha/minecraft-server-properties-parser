export interface PropertiesFile {
    "broadcast-rcon-to-ops"?: boolean | string
    "view-distance"?: number | string
    "max-build-height"?: number | string
    "server-ip"?: string
    "level-seed"?: string
    "rcon.port"?: number | string
    "gamemode"?: string
    "server-port"?: number | string
    "allow-nether"?: boolean | string
    "enable-command-block"?: boolean | string
    "enable-rcon"?: boolean | string
    "enable-query"?: boolean | string
    "op-permission-level"?: number | string
    "prevent-proxy-connections"?: boolean | string
    "generator-settings"?: boolean | string
    "resource-pack"?: string
    "level-name"?: string
    "rcon.password"?: string
    "player-idle-timeout"?: number | string
    "motd"?: string
    "query.port"?: number | string
    "debug"?: boolean | string
    "force-gamemode"?: boolean | string
    "hardcore"?: boolean | string
    "white-list"?: boolean | string
    "broadcast-console-to-ops"?: boolean | string
    "pvp"?: boolean | string
    "spawn-npcs"?: boolean | string
    "generate-structures"?: boolean | string
    "spawn-animals"?: boolean | string
    "snooper-enabled"?: boolean | string
    "difficulty"?: 0 | 1 | 2 | 3 | "peaceful" | "easy" | "normal" | "hard"
    "function-permission-level"?: number | string
    "network-compression-threshold"?: number | string
    "level-type"?: "default" | "flat" | "largebiomes" | "amplified" | "customized"
    "spawn-monsters"?: boolean | string
    "max-tick-time"?: number | string
    "enforce-whitelist"?: boolean | string
    "use-native-transport"?: boolean | string
    "max-players"?: number | string
    "resource-pack-sha1"?: string
    "spawn-protection"?: number | string
    "online-mode"?: boolean | string
    "allow-flight"?: boolean | string
    "max-world-size"?: number | string
}