---
name: Open-PS2-Loader
slug: open-ps2-loader-rodrigo1593-dev
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
  repository: rodrigo1593-dev/Open-PS2-Loader
  repositoryId: '1177330496'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-05-11T16:00:53Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-05-11T16:00:55Z'
  url: 'https://github.com/rodrigo1593-dev/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-07T20:53:50.594Z'
automation:
  sync: true
  github:
    repoEtag: W/"ef741ddc46363bfbfd4062ea85d25a3da5fd79e20d4ca7aad5f1f44795155a11"
    releasesEtag: W/"63b1550585f2855fe50a4599d4204380431fc4ad9697076344085f88218cae6c"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
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
