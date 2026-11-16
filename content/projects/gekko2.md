---
name: Gekko2
slug: gekko2
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
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: Mafiacoding/Gekko2
  repositoryId: '1288558854'
repository:
  archived: false
  defaultBranch: main
  stars: 18
  forks: 2
  lastCommit: '2026-11-16T01:43:57Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-16T09:44:26.452Z'
automation:
  sync: true
  github:
    repoEtag: W/"a52a1f18a04a992ac3ba5071bc242ec4181d48303c3816951f27c34f4f938855"
    releasesEtag: '"94ae9a01aad4edba2aa43b481d961886d303990bb45a15f4ef989d4b6bbd9d32"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
  maturity: active-wip
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
