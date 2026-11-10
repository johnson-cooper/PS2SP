---
name: OPL-Daily-Builds
slug: opl-daily-builds-jay-jay-opl
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
  repository: Jay-Jay-OPL/OPL-Daily-Builds
  repositoryId: '71666619'
repository:
  archived: false
  defaultBranch: master
  stars: 118
  forks: 18
  lastCommit: '2024-08-10T15:49:35Z'
latestRelease:
  tag: latest
  name: v1.2.0-Beta-DB-2203-aa531a8
  publishedAt: '2022-01-02T22:46:10Z'
  url: 'https://github.com/Jay-Jay-OPL/OPL-Daily-Builds/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-10T23:23:07.959Z'
automation:
  sync: true
  github:
    repoEtag: W/"777a75f9b20f5af5737c187db348ffb5a16055434c121d4995c35ffc912da273"
    releasesEtag: W/"4c5f520bdcaade183e152a0bb5af98d52ac34559a76bdf10137a81f5e529bd02"
discovery:
  method: 'fork-network:ps2homebrew/Open-PS2-Loader'
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
  forkOf: ps2homebrew/Open-PS2-Loader
  source: ps2homebrew/Open-PS2-Loader
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
