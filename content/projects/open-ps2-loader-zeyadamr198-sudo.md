---
name: Open-PS2-Loader
slug: open-ps2-loader-zeyadamr198-sudo
summary: Game and app loader for Sony PlayStation 2
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
  repository: zeyadamr198-sudo/Open-PS2-Loader
  repositoryId: '1149799534'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-02-04T15:04:54Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-02-04T15:04:55Z'
  url: 'https://github.com/zeyadamr198-sudo/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-01T14:27:09.988Z'
automation:
  sync: true
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
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
