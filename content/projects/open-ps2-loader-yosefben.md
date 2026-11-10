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
  lastSynchronized: '2026-11-10T23:23:06.215Z'
automation:
  sync: true
  github:
    repoEtag: W/"66d8630ec57c9429e3fdb6cedcae04cc6179e43ad26a3439ca00f4a67c4e9eb3"
    releasesEtag: W/"7ee7b500b650e2ea5192c972be2813b5c32701f9831b6791353ee5ed21b0980f"
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
