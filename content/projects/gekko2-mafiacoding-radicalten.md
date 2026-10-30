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
  lastSynchronized: '2026-10-30T14:09:13.294Z'
automation:
  sync: true
  github:
    repoEtag: W/"4c146b372fcccf77214eda222009140385b9dda23826db68a1d6b43cecd2ed25"
    releasesEtag: '"000355bbf274101e0048ce4960e43564dcb66510c0b66a35418a5215ce1cc384"'
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
