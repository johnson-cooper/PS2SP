---
name: Open-PS2-Loader
slug: open-ps2-loader-stayhye
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
  repository: Stayhye/Open-PS2-Loader
  repositoryId: '923724326'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-03-06T05:24:55Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-03-06T05:24:55Z'
  url: 'https://github.com/Stayhye/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-13T15:59:55.316Z'
automation:
  sync: true
  github:
    repoEtag: W/"815fd6d9a5c2177325e4f53a203da6c0bd7e292653fed09d74ba678ebd42b16f"
    releasesEtag: W/"6654cf79982f7fa5f6cd2906821a95c81c5d2c90c9263ae6b40aa8a0279f0bec"
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
