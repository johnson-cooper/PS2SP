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
  lastSynchronized: '2026-10-29T14:21:14.443Z'
automation:
  sync: true
  github:
    repoEtag: W/"98836e3ad5cf7427a43ac8f9a15ca538a7b24c4f4bc75a1b2a897fd4bcb0e038"
    releasesEtag: W/"346096c150d944238ddbc6ab9fc7f706d88081c30d65413b2f95bb24aeea8dfd"
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
