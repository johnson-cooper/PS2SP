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
  lastSynchronized: '2026-10-24T14:33:45.569Z'
automation:
  sync: true
  github:
    repoEtag: W/"4e7f57456d55ea8c533e6d4d82431dcc29ec4ff6deea7b86b94737e582627cd8"
    releasesEtag: '"94fbc3dfdcacf1e254cfcd39aeb7e8fce35a0ed1d132095cc974e5c6a70b4c5e"'
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
