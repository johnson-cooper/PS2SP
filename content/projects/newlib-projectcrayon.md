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
  lastSynchronized: '2026-10-16T17:24:53.610Z'
automation:
  sync: true
  github:
    repoEtag: W/"ee8eede8d5edfdeca5c466a375af4cb57685abb280b7f0642a5d579205955b50"
    releasesEtag: '"aa824d245b8e153ed7212275965d1ff2eb25500a1c59fc8657ffaa74128ffda3"'
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
