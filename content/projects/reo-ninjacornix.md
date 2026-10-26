---
name: reo
slug: reo-ninjacornix
summary: >-
  Resident Evil Outbreak native PC port: static recompilation of the PS2 game
  with online co-op (openSNAP), randomizer, cheats, controller support and 4K
  video settings.
categories:
  - cheat-tools
  - preservation
  - development
  - games
  - ports
tags:
  - fork
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: Ninjacornix/reo
  repositoryId: '1410670976'
repository:
  archived: false
  defaultBranch: main
  stars: 8
  forks: 0
  lastCommit: '2026-10-26T18:17:38Z'
latestRelease:
  tag: v1.0.19
  name: 'RE: Outbreak 1.0 (v1.0.19)'
  publishedAt: '2026-10-24T21:09:50Z'
  url: 'https://github.com/Ninjacornix/reo/releases/tag/v1.0.19'
activity:
  lastSynchronized: '2026-10-26T20:09:39.841Z'
automation:
  sync: true
discovery:
  method: 'incremental:"ps2 port" in:name,description,readme'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - published GitHub release present
    - GitHub fork of another repository
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: sp00nznet/reo
  source: sp00nznet/reo
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
