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
  stars: 2
  forks: 0
  lastCommit: '2026-11-16T13:19:48Z'
latestRelease:
  tag: core-20261109-52a352aa68
  name: 'ARMSX2 libretro core, 52a352aa68'
  publishedAt: '2026-11-09T13:46:47Z'
  url: 'https://github.com/RompEmu/ARMSX2/releases/tag/core-20261109-52a352aa68'
activity:
  lastSynchronized: '2026-11-23T09:05:38.533Z'
automation:
  sync: true
  github:
    repoEtag: W/"f1c9ac1e523ae3c3636d8e811442172ceb212ca4ad3a5d74474690e9787cd625"
    releasesEtag: W/"4f81dd3256145179da4dc6910127322eceb84655c4976afd1fb4a8258113a9a2"
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
