---
name: ARMSX2
slug: armsx2-armsx2
summary: ARMSX2 - The Playstation 2 Emulator for ARM64 Platforms
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
  repository: ARMSX2/ARMSX2
  repositoryId: '1036246172'
repository:
  archived: false
  defaultBranch: master
  stars: 2248
  forks: 186
  lastCommit: '2026-10-22T19:03:29Z'
latestRelease:
  tag: nightly-20261022
  name: ARMSX2 nightly 20261022 (b276f045c6)
  publishedAt: '2026-10-22T14:35:03Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/nightly-20261022'
activity:
  lastSynchronized: '2026-10-22T19:15:32.872Z'
automation:
  sync: true
  github:
    repoEtag: W/"bb70a76ba8ed610f05b2aaff8ceb304b87f58472ca2af3d9340c2b0c5bf8ecb2"
    releasesEtag: W/"8e565fe1dc31a267270f606d97db768c5f5204467e79314c3991cae7d0805e92"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
