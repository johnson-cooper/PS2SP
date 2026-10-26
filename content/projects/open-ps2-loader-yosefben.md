---
name: Open-PS2-Loader
slug: open-ps2-loader-yosefben
summary: Game and app loader for Sony PlayStation 2
categories:
  - loaders
tags:
  - opl
  - hdloader
  - homebrew
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
  - mx4sio
authors: []
license: AFL-3.0
homepage: 'https://ps2homebrew.github.io/Open-PS2-Loader/'
source:
  provider: github
  repository: yosefben/Open-PS2-Loader
  repositoryId: '305108755'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2025-12-06T10:01:12Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-06-24T21:12:59Z'
  url: 'https://github.com/yosefben/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-26T23:54:33.151Z'
automation:
  sync: true
  github:
    repoEtag: W/"a341f3ed951d0e27530b15d2e458e2e4bf2d37b929120900c61c0df5c8f2d3a6"
    releasesEtag: W/"4a05c5ce1cc5126bf2385d6f6a664c1657621331f4c213de600ff39b20857ef1"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
