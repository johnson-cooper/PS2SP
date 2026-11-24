---
name: PS2-Propio-Android
slug: ps2-propio-android-tobybloxarg-tech
summary: Proyecto experimental de PS2 para Android basado en ARMSX2 y PCSX2. GPL-3.0.
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://armsx2.net/'
source:
  provider: github
  repository: tobybloxarg-tech/PS2-Propio-Android
  repositoryId: '1448501176'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-06T16:40:17Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-24T06:06:09.027Z'
automation:
  sync: true
  github:
    repoEtag: W/"8242c0a52d761f6eb3f363a91fb3aba41b63880ec058e3daadf6bed29cffdbfb"
    releasesEtag: '"1225e3926759f2117b9a830704182986e371cb3e544c44a80269ecddea7b4787"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
