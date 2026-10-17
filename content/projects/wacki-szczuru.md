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
  lastSynchronized: '2026-10-17T04:28:00.999Z'
automation:
  sync: true
  github:
    repoEtag: W/"8d435339323dc35ab54693ad3d0a5911a356b7f2712004e1f0a1109acbc2e817"
    releasesEtag: W/"3539302769fa63caf5bf4c69438d7ed7763f0fb8de694e8528182d47f555a301"
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
