---
name: Open-PS2-Loader
slug: open-ps2-loader-howlingwolfhwc
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
  repository: HowlingWolfHWC/Open-PS2-Loader
  repositoryId: '903215743'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2024-12-14T05:54:46Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2024-12-14T05:54:46Z'
  url: 'https://github.com/HowlingWolfHWC/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-21T09:53:58.813Z'
automation:
  sync: true
  github:
    repoEtag: W/"e80d25fbc6aaf6bd5a1fe8eea2d761247b1586f4a41489af17d61b5517559961"
    releasesEtag: W/"c71876d59a9a7be8df2e3b9badd4d162ad44b50306b817b20b846d871e55fbd6"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
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
