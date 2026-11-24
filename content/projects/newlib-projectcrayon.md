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
  lastSynchronized: '2026-11-24T17:45:58.049Z'
automation:
  sync: true
  github:
    repoEtag: W/"71f534384f4cfc6cef51e7879c919847d0be7e60dacdd3ba52db5ed667666661"
    releasesEtag: '"5ac5c7b45b819dfd7b86689a99c92eb57767a2a65c23758534a6505685e4576b"'
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
