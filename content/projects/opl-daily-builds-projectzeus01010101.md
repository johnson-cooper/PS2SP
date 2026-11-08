---
name: OPL-Daily-Builds
slug: opl-daily-builds-projectzeus01010101
summary: OPL "Daily" Builds (Releases)
categories:
  - loaders
tags:
  - opl
  - hdloader
  - homebrew
  - fork
  - auto-discovered
features:
  - usb
  - hdd
  - network
  - mx4sio
authors: []
license: AFL-3.0
homepage: 'http://www.ps2-home.com/forum/viewtopic.php?f=13&t=3'
source:
  provider: github
  repository: projectZEUS01010101/OPL-Daily-Builds
  repositoryId: '705129242'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2023-10-08T21:27:07Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-08T15:13:59.368Z'
automation:
  sync: true
  github:
    repoEtag: W/"cd858edbbed3eaadd2b0eeff31973aecbdc409b342fccc5e80a5441de8596ea2"
    releasesEtag: '"92e2f2afde06cfa79fae294d94e1123ac5d56a202679866d4fecc6991c5d3df0"'
discovery:
  method: 'fork-network:citronalco/OPL-Daily-Builds'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: citronalco/OPL-Daily-Builds
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
