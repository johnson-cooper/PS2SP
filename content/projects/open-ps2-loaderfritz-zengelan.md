---
name: Open-PS2-LoaderFritz
slug: open-ps2-loaderfritz-zengelan
summary: Game and app loader for Sony PlayStation 2 customizedforfritzbox
categories:
  - loaders
  - utilities
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
  repository: zengelan/Open-PS2-LoaderFritz
  repositoryId: '1027350384'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-07-27T22:08:28Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-07-27T22:08:28Z'
  url: 'https://github.com/zengelan/Open-PS2-LoaderFritz/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-02T02:17:04.212Z'
automation:
  sync: true
  github:
    repoEtag: W/"de8953b5ffa14d89bddf290d5aff24d35a157ac3e66b9a4bea1cbb49138c75e0"
    releasesEtag: W/"8903b6f6266323b5f008a531597d7246d994cf5a45d202d1df695d2494117a96"
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
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
