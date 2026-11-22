---
name: OPL-Daily-Builds
slug: opl-daily-builds-danielb7390
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
  repository: danielb7390/OPL-Daily-Builds
  repositoryId: '105444062'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2021-07-22T12:27:18Z'
latestRelease:
  tag: latest
  name: v1.1.0-Beta-DB-2045-7394c75
  publishedAt: '2021-07-22T12:27:18Z'
  url: 'https://github.com/danielb7390/OPL-Daily-Builds/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-22T11:33:18.461Z'
automation:
  sync: true
  github:
    repoEtag: W/"0bd11c2bea4d2beeea3fffbe18ca77f83d4aa4722a65b966f6b802259425d89f"
    releasesEtag: W/"390328c9d2f3f0a8f37a67a6f2d99eee5c1f483bfb1e9c73640a7b9240ea19f9"
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
