---
name: FreeDVDBoot-AIO
slug: freedvdboot-aio-arthrimus
summary: PlayStation 2 DVD Player Exploit
categories:
  - boot-tools
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Arthrimus/FreeDVDBoot-AIO
  repositoryId: '825931354'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2024-07-08T19:34:36Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-03T15:08:40.878Z'
automation:
  sync: true
  github:
    repoEtag: W/"444833133a58f6e6307eed52037a807beeb456a13b6d2f10cd43b25fe9f8c052"
    releasesEtag: '"deab86ed32521bf0446e176d22353df10f44628a8482ca1f7c8577cb92cc9d0e"'
discovery:
  method: 'fork-network:CTurt/FreeDVDBoot'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CTurt/FreeDVDBoot'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
