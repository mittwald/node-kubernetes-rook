import {IKubernetesRESTClient, INamespacedResourceClient, NamespacedResourceClient} from "@mittwald/kubernetes";
import {Cluster, Filesystem, ObjectStore, Pool} from "./types/rook.io/v1alpha1";

export interface RookV1Alpha1API {
    clusters(): INamespacedResourceClient<Cluster, "Cluster", "rook.io/v1alpha1">;
    objectStores(): INamespacedResourceClient<ObjectStore, "ObjectStore", "rook.io/v1alpha1">;
    pools(): INamespacedResourceClient<Pool, "Pool", "rook.io/v1alpha1">;
    filesystems(): INamespacedResourceClient<Filesystem, "Filesystem", "rook.io/v1alpha1">;
}

export interface RookAPI {
    v1alpha1(): RookV1Alpha1API;
}

export interface IRookCustomResourceAPI {
    rook(): RookAPI;
}

export class RookCustomResourceAPI implements IRookCustomResourceAPI {
    public constructor(private restClient: IKubernetesRESTClient) {
    }

    public rook(): RookAPI {
        return {
            v1alpha1: () => ({
                clusters: () => new NamespacedResourceClient(this.restClient, "/apis/rook.io/v1alpha1", "/clusters"),
                objectStores: () => new NamespacedResourceClient(this.restClient, "/apis/rook.io/v1alpha1", "/objectstores"),
                pools: () => new NamespacedResourceClient(this.restClient, "/apis/rook.io/v1alpha1", "/pools"),
                filesystems: () => new NamespacedResourceClient(this.restClient, "/apis/rook.io/v1alpha1", "/filesystems"),
            }),
        };
    }
}
