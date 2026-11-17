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
  lastSynchronized: '2026-11-17T03:55:11.373Z'
automation:
  sync: true
  github:
    repoEtag: W/"6a52214563e746d3ec93b6ccbfcf57b2bf6d4153a34a719dd95ff5c3e8427eb0"
    releasesEtag: W/"53d6b569ee5bd20fdc1da955561e31be746e809d694acffda51e3c277fa6dd62"
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
