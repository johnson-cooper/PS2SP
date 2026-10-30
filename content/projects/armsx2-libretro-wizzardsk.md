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
  lastSynchronized: '2026-10-30T00:59:37.985Z'
automation:
  sync: true
  github:
    repoEtag: W/"24e2f0d7bde6706cc978158373848d040f3149b1bb13c42054cd5f89dc60e0a0"
    releasesEtag: W/"f01a4d9a5f6cf6e7ccd0090b799cb201f70a2b938d03b739308ad931620e81f3"
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
