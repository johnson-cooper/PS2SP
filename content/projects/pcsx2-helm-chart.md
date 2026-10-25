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
  lastSynchronized: '2026-10-25T19:38:26.384Z'
automation:
  sync: true
  github:
    repoEtag: W/"fde8a45a8315114788ff3c9f9700d721d5761844f556a0bb1783ff60f72b0904"
    releasesEtag: W/"a892e8ce661f72ba621db530bae963b87ed94dd1c808606589cb4024f2d155d7"
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
