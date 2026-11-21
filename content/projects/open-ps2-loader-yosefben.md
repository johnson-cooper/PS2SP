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
  lastSynchronized: '2026-11-21T23:17:13.173Z'
automation:
  sync: true
  github:
    repoEtag: W/"0138b2595cfb0943610c08fe6bd5f08526df23137b9be36c8a1678d4bb525e25"
    releasesEtag: W/"f4bc3d50063128d6e1e97e952444f4373c2e73b823ea695904573b383f7b94ee"
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
