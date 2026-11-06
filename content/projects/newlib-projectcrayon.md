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
  lastSynchronized: '2026-11-06T17:30:53.923Z'
automation:
  sync: true
  github:
    repoEtag: W/"476d9d86b003a969c835f58167039372e0337980f088b1e4e3550e9d2060456c"
    releasesEtag: '"5728c5463282b62da321618a8dc7a8180d3e7f492d10c28b3e9aeadc9676e3dd"'
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
