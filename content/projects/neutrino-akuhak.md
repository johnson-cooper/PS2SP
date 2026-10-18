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
  lastSynchronized: '2026-10-18T14:35:21.046Z'
automation:
  sync: true
  github:
    repoEtag: W/"8e191235460a16d92ba02e68a7a21ce4c69275b62ec2f58f97c04130bee45086"
    releasesEtag: W/"34156c252adac1e5cd837beb590cf23857d8a04f8be2e61614c580d224a3bec2"
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
