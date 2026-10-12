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
  lastCommit: '2026-10-12T12:51:28Z'
latestRelease:
  tag: core-20261012-9e77ffeda4
  name: 'ARMSX2 libretro core, 9e77ffeda4'
  publishedAt: '2026-10-12T12:51:29Z'
  url: 'https://github.com/RompEmu/ARMSX2/releases/tag/core-20261012-9e77ffeda4'
activity:
  lastSynchronized: '2026-10-12T16:07:57.694Z'
automation:
  sync: true
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
