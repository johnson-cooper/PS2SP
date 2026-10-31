---
name: Open-PS2-Loader-RetroGem
slug: open-ps2-loader-retrogem-mike41
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
  repository: MiKE41/Open-PS2-Loader-RetroGem
  repositoryId: '910737426'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-07-28T02:56:53Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-07-28T02:56:53Z'
  url: 'https://github.com/MiKE41/Open-PS2-Loader-RetroGem/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-31T12:30:24.600Z'
automation:
  sync: true
  github:
    repoEtag: W/"c5f2540c3bbee2a578d0c7ce3a0ba0c47180345eef77a1b16f07e18a0e28cab3"
    releasesEtag: W/"85d4e438452ef78b24cd7001a7522dcd9f3f26a20242dca71b26042fe7882c24"
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
