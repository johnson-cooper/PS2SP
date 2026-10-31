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
  lastSynchronized: '2026-10-31T21:35:10.638Z'
automation:
  sync: true
  github:
    repoEtag: W/"82bd77fddfa37a785038e521e4568c34610475c2e3b660a911d0c3f9c29e1a4e"
    releasesEtag: W/"db56bed746b9e613269338374df065e67696e5b07cee678724ee4f9a9103635e"
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
