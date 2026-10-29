---
name: armsx2-libretro
slug: armsx2-libretro-wizzardsk
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
  repository: WizzardSK/armsx2-libretro
  repositoryId: '1351467280'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-09-22T17:07:21Z'
latestRelease:
  tag: android-test
  name: Android test build (2bc39be)
  publishedAt: '2026-09-09T21:20:03Z'
  url: 'https://github.com/WizzardSK/armsx2-libretro/releases/tag/android-test'
activity:
  lastSynchronized: '2026-10-29T00:57:07.675Z'
automation:
  sync: true
  github:
    repoEtag: W/"bfd6b7f99f6bf9bd9f757d5892d8d1c6c03763ee225269f490c168d7a0390d97"
    releasesEtag: W/"558c38de08cd6d57f5b06afec86c068cba85299bc91c5ff934a7a0730c71ad05"
discovery:
  method: 'fork-network:ARMSX2/ARMSX2'
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
