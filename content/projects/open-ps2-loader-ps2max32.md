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
  stars: 23
  forks: 6
  lastCommit: '2026-02-22T16:13:20Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-02-22T16:13:22Z'
  url: 'https://github.com/ps2max32/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-27T19:00:44.099Z'
automation:
  sync: true
  github:
    repoEtag: W/"8debae62aee9584bea6b59e91e1538a64ae9ec94c9e095a8e40ce815bb7942fc"
    releasesEtag: W/"109998fd0ca50b597f7ab1499fbd91ab1697f917c41ccb4631d6ec2746927553"
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
