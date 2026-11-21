---
name: newday
slug: newday-teag3
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
  repository: TEaG3/newday
  repositoryId: '1466849759'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-21T21:39:40Z'
latestRelease:
  tag: arabic-v1.3.1
  name: NULD Arabic Edition — TEa.G3
  publishedAt: '2026-11-21T20:10:56Z'
  url: 'https://github.com/TEaG3/newday/releases/tag/arabic-v1.3.1'
activity:
  lastSynchronized: '2026-11-21T21:54:17.097Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: danielnuld/nuld'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: danielnuld/nuld
  source: danielnuld/nuld
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
