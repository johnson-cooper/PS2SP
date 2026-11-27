---
name: nuld-fork
slug: nuld-fork-nathanneurotic
summary: >-
  NULD (formerly ORBIT): a game launcher that runs on a real PlayStation 2.
  Covers, 3D save icons, in-game menu, home game server, RetroAchievements
categories:
  - launchers
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://danielnuld.github.io/nuld/'
source:
  provider: github
  repository: NathanNeurotic/nuld-fork
  repositoryId: '1457878155'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-19T00:13:44Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-27T08:34:38.973Z'
automation:
  sync: true
  github:
    repoEtag: W/"953ccbd21070b0bdd9c22e3240ff9390da9f14c2de9d7ccf140e234e212a8141"
    releasesEtag: '"16208236851f74c42eac13873cc4181c55047f06f9f0e8a4ed3bfffb11ba8a51"'
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: danielnuld/nuld'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: danielnuld/nuld
  source: danielnuld/nuld
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
