---
name: Launchstation
slug: launchstation-sahlberg
summary: >-
  A full dashboard for PS2 built ontop of wLaunchELF_R3Z and given extra device
  support, features, cloud saves, a GUI theme engine, and so much more!
categories:
  - themes
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: 'https://nathanneurotic.github.io/Launchstation/'
source:
  provider: github
  repository: sahlberg/Launchstation
  repositoryId: '1454836289'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-12T15:50:40Z'
latestRelease:
  tag: build-1157
  name: Launchstation Build 1157 (3dce119)
  publishedAt: '2026-11-12T07:16:49Z'
  url: 'https://github.com/sahlberg/Launchstation/releases/tag/build-1157'
activity:
  lastSynchronized: '2026-11-22T03:16:04.016Z'
automation:
  sync: true
  github:
    repoEtag: W/"0c0c43f064995f14608565c38ed463a2260641795710d9b6beca69583b0c567e"
    releasesEtag: W/"d621b266a94fc753b56705d5777c7449166024ce9c8ecb72358067642cdbabbb"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - README identifies PS2 homebrew
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: NathanNeurotic/Launchstation'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: NathanNeurotic/Launchstation
  source: NathanNeurotic/Launchstation
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
