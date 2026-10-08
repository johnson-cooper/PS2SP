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
  lastSynchronized: '2026-10-08T21:21:57.653Z'
automation:
  sync: true
  github:
    repoEtag: W/"34ccd57e08d436087b4b9b130ec459d2644d862e2828bd963d01d838e3b26252"
    releasesEtag: '"9d58babb9c0ebce4843e7fb6d1a98d7c2a114a7ab5d177718e3a0fa6f173a756"'
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
