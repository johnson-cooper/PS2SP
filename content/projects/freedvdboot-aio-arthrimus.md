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
  lastSynchronized: '2026-11-26T15:17:18.405Z'
automation:
  sync: true
  github:
    repoEtag: W/"ae0ef332e068845c083eb05f001ed5054649bfb0541248eb3b6ca426eff60a34"
    releasesEtag: '"4a379f54e63716ee058ad0149b63163d56132c52d2eaa3a556019eed41a8343b"'
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
