---
name: Open-PS2-Loader
slug: open-ps2-loader-ps2-mmce
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
  repository: ps2-mmce/Open-PS2-Loader
  repositoryId: '907360120'
repository:
  archived: false
  defaultBranch: master
  stars: 97
  forks: 4
  lastCommit: '2025-11-24T09:03:39Z'
latestRelease:
  tag: OPL-MMCE-beta-2
  name: OPL - MMCE beta 2
  publishedAt: '2025-01-15T12:48:25Z'
  url: 'https://github.com/ps2-mmce/Open-PS2-Loader/releases/tag/OPL-MMCE-beta-2'
activity:
  lastSynchronized: '2026-10-31T17:44:37.904Z'
automation:
  sync: true
  github:
    repoEtag: W/"409d9b00fcd5adc69a69d1b411ec6c855e1dd32063d513146fa08899b5c071a7"
    releasesEtag: W/"0d04c305837b525c6c895a559dfb8134ee8ff1871cfaed2791646f7006d4a91d"
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
