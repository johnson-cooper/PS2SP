---
name: neutrino
slug: neutrino-akuhak
summary: 'Small, Fast and Modular PS2 Game Loader'
categories:
  - loaders
tags:
  - neutrino
  - loader
  - device-emulation
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
  repository: AKuHAK/neutrino
  repositoryId: '666560170'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-02-02T21:12:05Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2024-12-05T14:00:25Z'
  url: 'https://github.com/AKuHAK/neutrino/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-24T14:34:08.525Z'
automation:
  sync: true
  github:
    repoEtag: W/"2330f1cc3867e0b690a2418a2f7ab2b2b530a94293422ec0dafba04de83f3e5c"
    releasesEtag: W/"f0c770c703ea47d37bd8beea989e09c773178ed4d20a6f8682a7dbe6dff318ac"
discovery:
  method: 'fork-network:ps2max32/neutrino'
  confidence: 95
  evidence:
    - repository description explicitly identifies PS2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2max32/neutrino'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2max32/neutrino
  source: ps2max32/neutrino
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
