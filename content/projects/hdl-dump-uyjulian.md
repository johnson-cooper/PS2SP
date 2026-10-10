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
  lastSynchronized: '2026-10-10T13:42:17.061Z'
automation:
  sync: true
  github:
    repoEtag: W/"6de267569783b2b7ca8b7eaef9acb348bfc8e985893134cc9f187095a18ea775"
    releasesEtag: W/"e5a10d4098d89567696e980d75259a9e3d21f3cb531ee1dd1c6a5455c52634bf"
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
