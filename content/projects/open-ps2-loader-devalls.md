---
name: Open-PS2-Loader
slug: open-ps2-loader-devalls
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
  repository: devalls/Open-PS2-Loader
  repositoryId: '305426836'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2024-06-04T16:32:18Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2024-06-04T16:32:19Z'
  url: 'https://github.com/devalls/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-13T00:24:59.424Z'
automation:
  sync: true
  github:
    repoEtag: W/"b15544bfc94bec125d0d969a2bb35162030b46b9ffb6523b90c9fd17a41a7000"
    releasesEtag: W/"c6f3ec7c4ef24b1623da524b7a4dac7ae25fb8277679f77a6021f202198d3e12"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
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
