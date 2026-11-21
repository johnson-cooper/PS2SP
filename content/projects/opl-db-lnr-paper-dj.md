---
name: OPL-DB-LNR
slug: opl-db-lnr-paper-dj
summary: OPL "Jay-Jay" DB (LNR)
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
  repository: PaPer-DJ/OPL-DB-LNR
  repositoryId: '602309208'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2022-01-02T22:46:09Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-21T08:46:04.198Z'
automation:
  sync: true
discovery:
  method: 'fork-network:Jay-Jay-OPL/OPL-Daily-Builds'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/Open-PS2-Loader'
  maturity: dormant-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: Jay-Jay-OPL/OPL-Daily-Builds
  source: ps2homebrew/Open-PS2-Loader
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
