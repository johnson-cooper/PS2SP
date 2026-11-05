---
name: psiimedia
slug: psiimedia-mxrlbo
summary: Multimedia player for Sony PlayStation 2
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
  repository: mxrlbo/psiimedia
  repositoryId: '1360675420'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2023-08-05T07:09:16Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-05T03:31:55.585Z'
automation:
  sync: true
  github:
    repoEtag: W/"48f2590d4f2cafb07e1e1587c996169967816c4f65a2e9b1108e87f84e2bccde"
    releasesEtag: '"d0fd33205f72e666ae36b3d0b58a9c1bc940fa028f6d4d3236e413053a4ae128"'
discovery:
  method: 'fork-network:ps2homebrew/SMS'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/SMS'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/SMS
  source: ps2homebrew/SMS
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
