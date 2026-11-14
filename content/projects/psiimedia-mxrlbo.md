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
  lastSynchronized: '2026-11-14T03:17:26.390Z'
automation:
  sync: true
  github:
    repoEtag: W/"258307ec01ff2b6bdafe320f52140140264055ed1d94170b53d760531f2f8b10"
    releasesEtag: '"da75f3c1438a29a4ff9b17b9d2405560409358ebfa56c09e1268291275d476c8"'
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
