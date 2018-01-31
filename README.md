# Rook.io client for Node.JS

[![npm version](https://badge.fury.io/js/%40mittwald%2Fkubernetes-rook.svg)](https://www.npmjs.com/package/@mittwald/kubernetes-rook)
[![Build Status](https://travis-ci.org/mittwald/node-kubernetes-rook.svg?branch=master)](https://travis-ci.org/mittwald/node-kubernetes-rook)

## Installation

You can install this package via NPM:

    $ npm install @mittwald/kubernetes-rook

## Usage

```typescript
const api = new KubernetesAPI(client).extend(new RookCustomResourceAPI(client));
const filesystems = await api.rook().v1alpha1().filesystems().list();
```

## Supported resources

- rook.io/v1alpha1
    - Cluster
    - Filesystem
    - ObjectStore
    - Pool

## References

- https://rook.io/docs/rook/v0.6/kubernetes.html

