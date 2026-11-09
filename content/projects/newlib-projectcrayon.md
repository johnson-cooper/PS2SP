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
  lastSynchronized: '2026-11-09T17:30:07.588Z'
automation:
  sync: true
  github:
    repoEtag: W/"cedacc92483b85f097e3479eac02d14ebdcac0a4dcaadf5953012c472e68f84e"
    releasesEtag: '"1b07a5f20096cf9b5a1d413c9a9567ef7d1120a01238e1a61c91dfa57f6d8b7a"'
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
