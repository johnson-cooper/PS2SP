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
  lastSynchronized: '2026-10-16T17:24:36.704Z'
automation:
  sync: true
  github:
    repoEtag: W/"d9a3a5cbb5a731ba94bcf141b7f61dad1797506057003f92938ab871e94ccbd5"
    releasesEtag: W/"bc575e91b27903fbaf4d4f7db34f4488a775643f156102e81c2af053c2158212"
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
