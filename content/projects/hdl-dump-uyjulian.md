---
name: hdl-dump
slug: hdl-dump-uyjulian
summary: >-
  Host command-line tool for installing and extracting PS2 games on
  APA-formatted internal hard drives over network or direct connection.
categories:
  - host-tools
  - loaders
tags:
  - hdd
  - hdloader
  - apa
  - fork
  - auto-discovered
features:
  - hdd
authors: []
license: GPL-2.0
homepage: null
source:
  provider: github
  repository: uyjulian/hdl-dump
  repositoryId: '218208720'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2024-11-24T00:56:53Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2024-11-24T00:56:54Z'
  url: 'https://github.com/uyjulian/hdl-dump/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-26T13:08:06.886Z'
automation:
  sync: true
  github:
    repoEtag: W/"afdfc1e86280e0d74f9ad549d6041cd1f4565e1c65a703cd3a87ced955d9c1e2"
    releasesEtag: W/"978120be459bea4c6200f9e5d494121ae698f2481bbe0259faf5b591c2c7b6c5"
discovery:
  method: 'fork-network:ps2homebrew/hdl-dump'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/hdl-dump'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/hdl-dump
  source: ps2homebrew/hdl-dump
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
