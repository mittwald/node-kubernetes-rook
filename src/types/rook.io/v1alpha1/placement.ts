import {NodeAffinity, PodAffinity, PodAntiAffinity, Toleration} from "@mittwald/kubernetes/types/core/v1";

export interface Placement {
    nodeAffinity?: NodeAffinity;
    podAffinity?: PodAffinity;
    podAntiAffinity?: PodAntiAffinity;
    tolerations?: Toleration[];
}
