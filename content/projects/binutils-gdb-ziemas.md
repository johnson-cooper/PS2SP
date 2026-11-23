---
name: binutils-gdb
slug: binutils-gdb-ziemas
summary: Unofficial mirror of sourceware binutils-gdb repository. Updated daily.
categories:
  - sdks
  - development
tags:
  - fork
  - auto-discovered
features: []
authors: []
license: GPL-2.0
homepage: 'https://sourceware.org/git/gitweb.cgi?p=binutils-gdb.git'
source:
  provider: github
  repository: Ziemas/binutils-gdb
  repositoryId: '719813476'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-11-27T18:51:46Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-23T09:05:43.800Z'
automation:
  sync: true
  github:
    repoEtag: W/"d8b39ce210dd58efb30b80e9e841f990050e562776a084befed76f7ac48944bb"
    releasesEtag: '"4b1936b832eb100b4d032ffeff0fab4b0b465a077892df76bb0807351967be69"'
discovery:
  method: 'fork-network:ps2dev/binutils-gdb'
  confidence: 95
  evidence:
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: mstorsjo/binutils-gdb'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: ps2dev/binutils-gdb
  source: mstorsjo/binutils-gdb
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
