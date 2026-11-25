---
name: Open-PS2-Loader
slug: open-ps2-loader-bignaux
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
  repository: bignaux/Open-PS2-Loader
  repositoryId: '362452728'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2025-11-26T14:42:11Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2023-03-01T09:11:03Z'
  url: 'https://github.com/bignaux/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-25T12:56:41.242Z'
automation:
  sync: true
  github:
    repoEtag: W/"47d69c2c60cf07667107ee76f1e18acb05b1e1e20b0114734c24a589ba25f048"
    releasesEtag: W/"60a555d065a8928ddfc487405acf6739285b49e94239dd3957cc57c338ed7b26"
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
