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
  lastCommit: '2026-11-11T07:29:50Z'
latestRelease:
  tag: android-test
  name: Android test build (2bc39be)
  publishedAt: '2026-09-09T21:20:03Z'
  url: 'https://github.com/WizzardSK/armsx2-libretro/releases/tag/android-test'
activity:
  lastSynchronized: '2026-11-13T00:24:14.588Z'
automation:
  sync: true
  github:
    repoEtag: W/"b3de690851b262469e50990c8712d9e55af4d0c689017339b79e47b4d4141f52"
    releasesEtag: W/"7a4a6a1a80765ce89e144c84aa41659ce5726e5f46a10890e728710c4620c7fe"
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
