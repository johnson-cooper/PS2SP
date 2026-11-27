---
name: OPL-Daily-Builds
slug: opl-daily-builds-leileiwe
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
  repository: leileiwe/OPL-Daily-Builds
  repositoryId: '315868587'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-11-25T08:14:02Z'
latestRelease:
  tag: latest
  name: Latest development builds
  publishedAt: '2020-11-25T08:14:03Z'
  url: 'https://github.com/leileiwe/OPL-Daily-Builds/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-27T08:35:03.377Z'
automation:
  sync: true
  github:
    repoEtag: W/"6278d93627a843c5b7250ef23fa304a4a37b55451bb0c4a7b8ca83416f265179"
    releasesEtag: W/"0e23643e641902b90b8cf927915bbd264c70f4ded3b2fdd3e786ecf6c5d2002c"
discovery:
  method: 'fork-network:Jay-Jay-OPL/OPL-Daily-Builds'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: Jay-Jay-OPL/OPL-Daily-Builds
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
