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
  lastSynchronized: '2026-10-18T14:35:00.265Z'
automation:
  sync: true
  github:
    repoEtag: W/"cf15a48bd23d649ce6388b30d904e8ed27eaa8462b8871120bf149ea5b4fe2b8"
    releasesEtag: '"c640920e4e9bca10914115fba992c8215e6aa10a4c5308ecfe128fe0d3464883"'
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
