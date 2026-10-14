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
  stars: 98
  forks: 4
  lastCommit: '2025-11-24T09:03:39Z'
latestRelease:
  tag: OPL-MMCE-beta-2
  name: OPL - MMCE beta 2
  publishedAt: '2025-01-15T12:48:25Z'
  url: 'https://github.com/ps2-mmce/Open-PS2-Loader/releases/tag/OPL-MMCE-beta-2'
activity:
  lastSynchronized: '2026-10-14T17:11:22.872Z'
automation:
  sync: true
  github:
    repoEtag: W/"641f0085ad7da738abd40a48eab78248f1cafa128aad72664f391a61982184fd"
    releasesEtag: W/"556e220329a181836609ba0d6c732824736090a8a34263618a3f4178d8515327"
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
