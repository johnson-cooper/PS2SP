---
name: wacki
slug: wacki-mdudzinski
summary: >-
  A from-scratch C/SDL2 reimplementation of Wacki: Kosmiczna rozgrywka (1998), a
  cult Polish point-and-click adventure. Reverse-engineered opcode-by-opcode
  from the original. Plays start to finish on macOS, Linux, Windows, Android,
  Miyoo and PortMaster handhelds, and the PlayStation 2.
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
  repository: mdudzinski/wacki
  repositoryId: '1299190478'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-07-05T21:40:55Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-26T05:07:00.804Z'
automation:
  sync: true
  github:
    repoEtag: W/"92a8c5060db624a3c9579769767ef2010ac53abe90140ea36e728c8da35c4b22"
    releasesEtag: '"7807fc945c82a55a373917423d07bcc65bba2c22ba0a38e4906861cea414cdb8"'
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
