---
name: pcsx2-helm-chart
slug: pcsx2-helm-chart
summary: >-
  Helm chart for PCSX2, the PlayStation 2 emulator, deployed as a full desktop
  over the browser via KasmVNC.
categories:
  - emulators
tags:
  - auto-discovered
  - pending-promoted
  - released-active
features: []
authors: []
license: MIT
homepage: 'https://docs.linuxserver.io/images/docker-pcsx2/'
source:
  provider: github
  repository: HenriqZimer/pcsx2-helm-chart
  repositoryId: '1332030091'
  url: 'https://github.com/HenriqZimer/pcsx2-helm-chart'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-19T12:49:52Z'
latestRelease:
  tag: v1.5.6
  name: v1.5.6
  publishedAt: '2026-08-30T15:52:21Z'
  url: 'https://github.com/HenriqZimer/pcsx2-helm-chart/releases/tag/v1.5.6'
activity:
  lastChecked: '2026-10-19T14:59:02.710Z'
  lastSynchronized: '2026-10-26T19:21:01.994Z'
automation:
  sync: true
  github:
    repoEtag: W/"f4e56fcfc6727cbe9df887c48651c32337fb65bb719c8f8407fb22b4553f42c7"
    releasesEtag: W/"cb8cecb19cad836bd13c5003a4718fe1d50670eb058b5269eb021119540e5136"
discovery:
  method: 'pending-promotion:incremental:"PlayStation 2" in:name,description,readme'
  confidence: 85
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically promoted from PS2SP's discovery review queue because it met the public catalog threshold. This entry is not yet human-verified; upstream repository and release metadata will continue to synchronize automatically.
