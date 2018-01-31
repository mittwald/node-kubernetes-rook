import {ObjectMeta} from "@mittwald/kubernetes/types/meta/v1";

export interface ErasureCodedSpec {
    codingChunks: number;
    dataChunks: number;
}

export interface ReplicatedSpec {
    size: number;
}

export type PoolSpec = {
    failureDomain: "osd" | "host";
} & ({replicated: ReplicatedSpec} | {erasureCoded: ErasureCodedSpec});

export interface Pool {
    metadata: ObjectMeta;
    spec: PoolSpec;
}
