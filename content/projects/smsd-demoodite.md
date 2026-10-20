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
  lastSynchronized: '2026-10-20T00:21:55.317Z'
automation:
  sync: true
  github:
    repoEtag: W/"4f158b4ceb147d7e0ae264c3db124e171482da6c25c92c2d213fcad1d464ef9e"
    releasesEtag: '"d1edf7833282760505ae30e6b818cd81821b0aa28f870a1b9d0b0f9fc5427ea0"'
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
