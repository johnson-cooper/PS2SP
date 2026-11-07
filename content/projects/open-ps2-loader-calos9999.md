---
name: Open-PS2-Loader
slug: open-ps2-loader-calos9999
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
  repository: calos9999/Open-PS2-Loader
  repositoryId: '938142402'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-06-19T11:05:54Z'
latestRelease:
  tag: latest
  name: latest
  publishedAt: '2026-06-19T11:05:55Z'
  url: 'https://github.com/calos9999/Open-PS2-Loader/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-07T10:10:29.281Z'
automation:
  sync: true
  github:
    repoEtag: W/"684eca329e19d03f99eb32f1254dcd9adae4cee3d3412489982a463e8d89e285"
    releasesEtag: W/"5a313c84aa52611145ff42b95742c4d8bddbef215df8072f396acb802cbccf03"
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
hidden: false
relationships:
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
