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
  lastSynchronized: '2026-10-17T13:44:00.173Z'
automation:
  sync: true
  github:
    repoEtag: W/"a1b72403214dae22dc9a79caf421fcdb7add0ea14dbe0f6c3cb09b8849c8673f"
    releasesEtag: W/"65addaa13b339dc266ab5aa1c36b990ace5f9dc96a39ec155437d0e104431e64"
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
