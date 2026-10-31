---
name: wacki
slug: wacki-kicer86
summary: >-
  A from-scratch C/SDL2 reimplementation of Wacki: Kosmiczna rozgrywka (1998), a
  cult Polish point-and-click adventure. Reverse-engineered opcode-by-opcode
  from the original. Plays start to finish on macOS, Linux, Windows, Miyoo and
  PortMaster handhelds, and the PlayStation 2.
categories:
  - games
  - ports
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://mszula.github.io/wacki/'
source:
  provider: github
  repository: Kicer86/wacki
  repositoryId: '1271310489'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-06-16T14:33:59Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-31T21:36:29.074Z'
automation:
  sync: true
  github:
    repoEtag: W/"ee52324acaeb4e84d28ab0744b8c2e861577cf3907711f927d1d39ce219dc3a4"
    releasesEtag: '"4da18e51dfb63479748d5f2062fd7c31ab13b4cfeaf582b2c6f4acdcfce67a3f"'
discovery:
  method: 'fork-network:mszula/wacki'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: mszula/wacki'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: mszula/wacki
  source: mszula/wacki
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
