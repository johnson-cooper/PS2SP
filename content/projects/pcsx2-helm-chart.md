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
  lastSynchronized: '2026-11-01T19:41:26.204Z'
automation:
  sync: true
  github:
    repoEtag: W/"391d59f9e80b3b0dad5c541ff9b4dbeaa7e277df034722b6f8e32f8ef550782b"
    releasesEtag: W/"5f62629cfbcc861889d363e438f55662915a599a203dde94cea122a5d08ee877"
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
