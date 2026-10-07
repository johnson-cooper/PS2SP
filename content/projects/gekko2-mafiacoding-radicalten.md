---
name: Gekko2-Mafiacoding
slug: gekko2-mafiacoding-radicalten
summary: >-
  Gekko2 is an experimental PlayStation 2 emulator for Nintendo Wii, featuring a
  custom PowerPC JIT and GX renderer. Real PS2 BIOS startup works on Wii, with
  OSDSYS navigation tested in native builds. Early alpha—stability and
  performance are the priority. Inspired by PCSX2.
categories:
  - dashboards
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: radicalten/Gekko2-Mafiacoding
  repositoryId: '1404967136'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-05T01:10:41Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-07T14:34:04.072Z'
automation:
  sync: true
  github:
    repoEtag: W/"3c7e8385a5cff816b58a0af3af3b6b41eda82e21dea3f07aea7818d75a3952e9"
    releasesEtag: '"a8b72fc23874e1701b2920e2e37cd2ca4913fb4b114fa3cba3efba72e700fa11"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: Mafiacoding/Gekko2'
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: Mafiacoding/Gekko2
  source: Mafiacoding/Gekko2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
