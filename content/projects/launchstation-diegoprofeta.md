---
name: Launchstation
slug: launchstation-diegoprofeta
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
  repository: Diegoprofeta/Launchstation
  repositoryId: '1447513133'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-17T06:08:03Z'
latestRelease:
  tag: build-1183
  name: Launchstation Build 1183 (6b6214c)
  publishedAt: '2026-11-17T06:08:04Z'
  url: 'https://github.com/Diegoprofeta/Launchstation/releases/tag/build-1183'
activity:
  lastSynchronized: '2026-11-17T13:27:14.155Z'
automation:
  sync: true
  github:
    repoEtag: W/"26efc321a4a791f0f01eb011e34c6fe75bc82a00198a976622b524fb293eae74"
    releasesEtag: W/"9015fa9d9ec84ffdf2b8c30c4f72d59d52991ec111b8bc736b5a7df6f6afbd07"
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
