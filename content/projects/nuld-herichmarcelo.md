---
name: nuld
slug: nuld-herichmarcelo
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
  repository: herichmarcelo/nuld
  repositoryId: '1459392700'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-16T00:26:10Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-16T03:08:35.121Z'
automation:
  sync: true
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
