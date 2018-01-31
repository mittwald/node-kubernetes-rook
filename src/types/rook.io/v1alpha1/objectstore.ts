import {ObjectMeta} from "@mittwald/kubernetes/types/meta/v1";
import {PoolSpec} from "./pool";
import {Placement} from "./placement";

export interface Gateway {
    type: "s3";
    sslCertificateRef?: string;
    port?: number;
    securePort?: number;
    instances?: number;
    allNodes?: boolean;
    placement?: Placement;
}

export interface ObjectStoreSpec {
    metadataPool?: PoolSpec;
    dataPool?: PoolSpec;
    gateway?: Gateway;
}

export interface ObjectStore {
    metadata: ObjectMeta;
    spec: ObjectStoreSpec;
}
