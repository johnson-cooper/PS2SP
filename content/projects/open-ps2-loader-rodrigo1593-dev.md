---
name: Open-PS2-Loader
slug: open-ps2-loader-rodrigo1593-dev
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
  repository: rodrigo1593-dev/Open-PS2-Loader
  repositoryId: '1177330496'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-05-11T16:00:53Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-05-11T16:00:55Z'
  url: 'https://github.com/rodrigo1593-dev/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-20T20:35:49.547Z'
automation:
  sync: true
  github:
    repoEtag: W/"5f28a392a825166f723fa479b0afb08369d556d9e1d4005b8c76fa4b8ece1c83"
    releasesEtag: W/"0ee34bdad20f161ef1c0999997665f046a2a1470635ed24f82fcfd9e0440a0ac"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
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
