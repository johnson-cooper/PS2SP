---
name: wacki
slug: wacki-szczuru
summary: >-
  A from-scratch C/SDL2 reimplementation of Wacki: Kosmiczna rozgrywka (1998), a
  cult Polish point-and-click adventure. Reverse-engineered opcode-by-opcode
  from the original. Plays start to finish on macOS, Linux, Windows, Miyoo and
  PortMaster handhelds.
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
  repository: szczuru/wacki
  repositoryId: '1268707080'
repository:
  archived: false
  defaultBranch: port-switch
  stars: 0
  forks: 1
  lastCommit: '2026-10-24T15:22:44Z'
latestRelease:
  tag: '1.0'
  name: '1.0 [3DS]'
  publishedAt: '2026-07-29T20:36:49Z'
  url: 'https://github.com/szczuru/wacki/releases/tag/1.0'
activity:
  lastSynchronized: '2026-11-18T04:23:54.414Z'
automation:
  sync: true
  github:
    repoEtag: W/"b6bd8008057b37a0541b3fd0d281a73610432a7d8ef4dc6c10f10020a7eb7441"
    releasesEtag: W/"85b7f8a7726d609d905a8cb73754221b02796e6f3f0531db13207a4d3744c56d"
discovery:
  method: 'fork-network:mszula/wacki'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: mszula/wacki'
  maturity: released-active
verified: false
featured: false
relationships:
  forkOf: mszula/wacki
  source: mszula/wacki
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
