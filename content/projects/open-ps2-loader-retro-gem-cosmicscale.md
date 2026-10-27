---
name: Open-PS2-Loader-Retro-GEM
slug: open-ps2-loader-retro-gem-cosmicscale
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
  repository: CosmicScale/Open-PS2-Loader-Retro-GEM
  repositoryId: '812225138'
repository:
  archived: false
  defaultBranch: main
  stars: 5
  forks: 0
  lastCommit: '2025-01-04T20:02:48Z'
latestRelease:
  tag: v1.0
  name: Open PS2 Loader with full Retro GEM support v1.0
  publishedAt: '2024-06-21T19:01:27Z'
  url: 'https://github.com/CosmicScale/Open-PS2-Loader-Retro-GEM/releases/tag/v1.0'
activity:
  lastSynchronized: '2026-10-27T21:20:50.112Z'
automation:
  sync: true
  github:
    repoEtag: W/"6f0d173c9b0ed7f24f7418a9dc6d44e67b3b51a4619a804c4964fe817f539af5"
    releasesEtag: W/"0060e637b893c697310a181be7cd50f2dafe7815c3c4ed16f598389f683ff2f0"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release metadata identifies PS2
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: released-legacy
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
