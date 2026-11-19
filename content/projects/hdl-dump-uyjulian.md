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
  lastSynchronized: '2026-11-19T13:07:20.481Z'
automation:
  sync: true
  github:
    repoEtag: W/"75dab17442cf3e3198243eb5314662dc5188a4fa7a513166cf97a678d3a97bf4"
    releasesEtag: W/"676eae496080225d490502666b7673afb2e120fb665b872e73239cd1a37be6b3"
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
