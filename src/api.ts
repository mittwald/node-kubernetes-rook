import {IKubernetesRESTClient, INamespacedResourceClient, NamespacedResourceClient} from "@mittwald/kubernetes";
import {Filesystem} from "./types/rook.io/v1alpha1";

export interface RookV1Alpha1API {
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
                filesystems: () => new NamespacedResourceClient(this.restClient, "/apis/rook.io/v1alpha1", "/filesystems"),
            }),
        };
    }
}
