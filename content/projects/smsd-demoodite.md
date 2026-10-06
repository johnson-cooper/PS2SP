---
name: SMSD
slug: smsd-demoodite
summary: Multimedia player for Sony PlayStation 2 specialized for DmoStation 2
categories:
  - media
tags:
  - media-player
  - video
  - audio
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Demoodite/SMSD
  repositoryId: '1263565005'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-06-16T22:34:46Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-06T00:50:29.394Z'
automation:
  sync: true
  github:
    repoEtag: W/"f7c5e8ddd38ce29655823c5dae6200914d20596041cb0112f5257b72a28cd217"
    releasesEtag: '"fe68fc8db0e297396a5826cd51b686f8bdb6f6aaa8dec163abdd3f6eb97d8d4a"'
discovery:
  method: 'fork-network:ps2homebrew/SMS'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/SMS'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/SMS
  source: ps2homebrew/SMS
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
