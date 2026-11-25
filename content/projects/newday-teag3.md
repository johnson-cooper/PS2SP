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
  lastCommit: '2026-11-25T22:30:26Z'
latestRelease:
  tag: arabic-v1.3.6
  name: TEa.G3 PS2 — النسخة العربية
  publishedAt: '2026-11-25T13:04:56Z'
  url: 'https://github.com/TEaG3/newday/releases/tag/arabic-v1.3.6'
activity:
  lastSynchronized: '2026-11-25T22:33:42.737Z'
automation:
  sync: true
  github:
    repoEtag: W/"2a5f5c37a195bc689a8b9b9325b6c5ea48ad704708a6a776a619dad89c92ae29"
    releasesEtag: W/"6c00534ef3b8e00456c781f8c6f6e86da18085c82a622b6f06e5524b8722cfa2"
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
