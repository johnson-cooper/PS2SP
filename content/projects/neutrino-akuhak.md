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
  lastSynchronized: '2026-10-19T14:41:42.504Z'
automation:
  sync: true
  github:
    repoEtag: W/"a5bccd1cbb7eac46c63222c118678e4d85051f57a5a37492d27ea0c0877d4446"
    releasesEtag: W/"383b0d5a0c879a94e91a5907c0eeac03f83fcf5e050f992650b889ff42515a12"
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
