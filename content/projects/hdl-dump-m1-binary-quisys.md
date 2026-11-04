---
name: hdl-dump-m1-binary
slug: hdl-dump-m1-binary-quisys
summary: Binaries for HDL dump for MacOS m1
categories:
  - host-tools
  - loaders
tags:
  - hdd
  - hdloader
  - apa
  - fork
  - auto-discovered
features:
  - hdd
authors: []
license: null
homepage: null
source:
  provider: github
  repository: quisys/hdl-dump-m1-binary
  repositoryId: '737622148'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2023-07-26T11:20:16Z'
latestRelease:
  tag: latest
  name: v1
  publishedAt: '2023-12-31T19:41:07Z'
  url: 'https://github.com/quisys/hdl-dump-m1-binary/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-04T17:15:58.353Z'
automation:
  sync: true
  github:
    repoEtag: W/"641dfb5c490f51e30d7c071ab3986bba4e96d8b5cc15bf336984a11aee6dcad2"
    releasesEtag: W/"4ed2aa301a0a0469eb1c6b3918af76389740842e469bea40326898056e4877bc"
discovery:
  method: 'fork-network:ps2homebrew/hdl-dump'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/hdl-dump'
  maturity: released-legacy
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/hdl-dump
  source: ps2homebrew/hdl-dump
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
