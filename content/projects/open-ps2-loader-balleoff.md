---
name: Open-PS2-Loader
slug: open-ps2-loader-balleoff
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
  repository: balleoff/Open-PS2-Loader
  repositoryId: '1061424756'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-09-22T10:04:41Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2025-09-22T10:09:53Z'
  url: 'https://github.com/balleoff/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-10T13:42:31.336Z'
automation:
  sync: true
  github:
    repoEtag: W/"536f06cc6b0eece5325c63c206a18dae4c432f53129f85dd281cbad0e894da73"
    releasesEtag: W/"b19e7911b727b1f1da1375661ade86919c1f71c12c235aae23d8b75ccb3ec540"
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
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
