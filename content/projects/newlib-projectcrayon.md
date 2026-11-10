---
name: newlib
slug: newlib-projectcrayon
summary: 'sourceware newlib repository for ps2dev, msys2 compatible'
categories:
  - libraries
  - development
tags:
  - fork
  - auto-discovered
features: []
authors: []
license: GPL-2.0
homepage: 'https://sourceware.org/git/gitweb.cgi?p=newlib-cygwin.git'
source:
  provider: github
  repository: projectcrayon/newlib
  repositoryId: '839157984'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2024-05-16T13:57:50Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-10T17:51:43.627Z'
automation:
  sync: true
  github:
    repoEtag: W/"b94900c714b1625659df55dde1e63ad2740ae0da91e4c5352057213d109e34fb"
    releasesEtag: '"fc306235fae60f40320f5c5058adc46667703b89cb98dd864151b11f789d08a8"'
discovery:
  method: 'fork-network:ps2dev/newlib'
  confidence: 95
  evidence:
    - PS2-specific topic
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: pabigot/newlib'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: ps2dev/newlib
  source: pabigot/newlib
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
