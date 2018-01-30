import {NodeAffinity, PodAffinity, PodAntiAffinity, ResourceRequirements, Toleration} from "@mittwald/kubernetes/types/core/v1";
import {ObjectMeta} from "@mittwald/kubernetes/types/meta/v1";

export interface ErasureCodedSpec {
    codingChunks: number;
    dataChunks: number;
}

export interface ReplicatedSpec {
    size: number;
}

export interface PoolSpec {
    failureDomain: "osd"|"host";
    replicated: ReplicatedSpec;
    erasureCoded: ErasureCodedSpec;
}

export interface Placement {
    nodeAffinity?: NodeAffinity;
    podAffinity?: PodAffinity;
    podAntiAffinity?: PodAntiAffinity;
    tolerations?: Toleration[];
}

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
