import {ObjectMeta} from "@mittwald/kubernetes/types/meta/v1";
import {Placement} from "./placement";

export interface StorageSelectionSettings {
    useAllDevices?: boolean;
    deviceFilter?: string;
    metadataDevice?: string;
}

export interface StorageConfigurationSettings {
    location?: any; // type is undocumented
    storeConfig?: {
        storeType?: "filestore"|"bluestore";
        databaseSizeMB?: number;
        walSizeMB?: number;
        journalSizeMB?: number;
    };
}

export type NodeSettings = {
    name: string;
    devices?: Array<{name: string}>;
    directories?: Array<{path: string}>;
} & StorageSelectionSettings & StorageConfigurationSettings

export interface ClusterSpec {
    versionTag?: string;
    dataDirHostPath?: string;
    hostNetwork?: boolean;
    monCount?: number;
    placement?: Placement;
    storage: StorageSelectionSettings & StorageConfigurationSettings & {
        useAllNodes?: boolean;
        nodes?: NodeSettings[];
    };
}

export interface Cluster {
    metadata: ObjectMeta;
    spec: ClusterSpec;
}
