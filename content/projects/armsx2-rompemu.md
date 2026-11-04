---
name: ARMSX2
slug: armsx2-rompemu
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
  repository: RompEmu/ARMSX2
  repositoryId: '1393659224'
repository:
  archived: false
  defaultBranch: romp
  stars: 1
  forks: 0
  lastCommit: '2026-11-02T13:24:51Z'
latestRelease:
  tag: core-20261102-53427c3eb3
  name: 'ARMSX2 libretro core, 53427c3eb3'
  publishedAt: '2026-11-02T13:24:52Z'
  url: 'https://github.com/RompEmu/ARMSX2/releases/tag/core-20261102-53427c3eb3'
activity:
  lastSynchronized: '2026-11-04T09:12:58.806Z'
automation:
  sync: true
  github:
    repoEtag: W/"1523a344f19feb5b1dae261ba2b06df871c80bda4a5883f7a21da215864ff227"
    releasesEtag: W/"bf8fe859ab848d184067b1baaa51fc5d63c834864a4ca3269fd312d4f85c9653"
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
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
