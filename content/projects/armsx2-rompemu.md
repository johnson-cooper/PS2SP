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
  lastSynchronized: '2026-11-21T09:53:02.977Z'
automation:
  sync: true
  github:
    repoEtag: W/"27880bc45450b4fc7d385b1f793e759c23356e378bf8a9659947383d7d905ac8"
    releasesEtag: W/"7ca4f3917e03025842fadd9d985677ee73993f5f2105540e9d30bc6eec4b469c"
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
