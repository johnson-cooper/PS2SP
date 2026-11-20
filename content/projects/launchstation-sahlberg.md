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
  lastSynchronized: '2026-11-20T03:16:15.296Z'
automation:
  sync: true
  github:
    repoEtag: W/"9988c05cc3495399b15c0a08e3b9638517c7f4329f2826dd1df28a58c6e51136"
    releasesEtag: W/"bb15156623809e8ec52ad74f643d17c719b04814ef82baf8905dc65931bbfcde"
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
