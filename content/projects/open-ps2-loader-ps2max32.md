---
name: Open-PS2-Loader
slug: open-ps2-loader-ps2max32
summary: PlayStation 2 software project discovered by PS2SP.
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
homepage: null
source:
  provider: github
  repository: ps2max32/Open-PS2-Loader
  repositoryId: '73854824'
repository:
  archived: false
  defaultBranch: master
  stars: 22
  forks: 6
  lastCommit: '2026-02-22T16:13:20Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-02-22T16:13:22Z'
  url: 'https://github.com/ps2max32/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-09T07:12:30.852Z'
automation:
  sync: true
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
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
