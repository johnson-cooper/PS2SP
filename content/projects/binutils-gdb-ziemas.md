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
  lastSynchronized: '2026-10-15T09:55:15.160Z'
automation:
  sync: true
  github:
    repoEtag: W/"fcc68e61cb09935fe158904900af8b75864425e4a35190971633d731c3656fbf"
    releasesEtag: '"9c87f986c1511a5a32feef58521b0db3e62906b6539834ad56617d45aae599ae"'
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
