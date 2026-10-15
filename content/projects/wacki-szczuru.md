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
  defaultBranch: port-vita
  stars: 0
  forks: 0
  lastCommit: '2026-09-27T13:01:16Z'
latestRelease:
  tag: '1.0'
  name: '1.0 :D'
  publishedAt: '2026-07-29T20:36:49Z'
  url: 'https://github.com/szczuru/wacki/releases/tag/1.0'
activity:
  lastSynchronized: '2026-10-15T04:40:37.038Z'
automation:
  sync: true
  github:
    repoEtag: W/"30e5c8de1c722ab78d507e522a6da2411eb0915506342f65e6b7b709a09b8c57"
    releasesEtag: W/"1a928c1d9afa3fc6b2ba7b439a094d97125171ddde6659d64a67915611e3400a"
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
