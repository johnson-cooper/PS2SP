---
name: Open-PS2-Loader
slug: open-ps2-loader-ps2max32
summary: PlayStation 2 software project discovered by PS2SP.
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
homepage: null
source:
  provider: github
  repository: ps2max32/Open-PS2-Loader
  repositoryId: '73854824'
repository:
  archived: false
  defaultBranch: master
  stars: 23
  forks: 6
  lastCommit: '2026-02-22T16:13:20Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-02-22T16:13:22Z'
  url: 'https://github.com/ps2max32/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-28T18:58:48.331Z'
automation:
  sync: true
  github:
    repoEtag: W/"5ee1feb1cf8cccbe272246139169a601baa0a0d7e869e23118abd251242979f3"
    releasesEtag: W/"39eed01ffaf3be5a0d4d3331876d993ff75e8e448e8cbf2cd35f787cb4ea3c8d"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
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
