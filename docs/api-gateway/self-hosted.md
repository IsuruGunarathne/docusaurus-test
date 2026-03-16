---
id: self-hosted
title: Self-Hosted Gateways
sidebar_position: 2
---

# Self-Hosted Gateways

Run the Bijira gateway runtime in your own environment (on-premises, private cloud, or edge) while managing it from the Bijira control plane.

## Supported Environments

- Kubernetes (Helm chart)
- Docker Compose
- Bare metal / VMs

## Quick Start (Kubernetes)

```bash
helm repo add bijira https://helm.wso2.com/bijira
helm install bijira-gateway bijira/gateway \
  --set controlPlane.token=<YOUR_TOKEN> \
  --set controlPlane.url=https://api.bijira.wso2.com
```
