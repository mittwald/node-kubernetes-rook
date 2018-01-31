import {ResourceRequirements} from "@mittwald/kubernetes/types/core/v1";
import {ObjectMeta} from "@mittwald/kubernetes/types/meta/v1";
import {PoolSpec} from "./pool";
import {Placement} from "./placement";

export interface MetadataServerSpec {
    activeCount: number;
    activeStandby: boolean;
    placement?: Placement;
    resources?: ResourceRequirements;
}

export interface FilesystemSpec {
    metadataPool: PoolSpec;
    dataPools: PoolSpec[];
    metadataServer: MetadataServerSpec;
}

export interface Filesystem {
    metadata: ObjectMeta;
    spec: FilesystemSpec;
}
