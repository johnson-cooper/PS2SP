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
  lastSynchronized: '2026-10-07T16:30:40.894Z'
automation:
  sync: true
  github:
    repoEtag: W/"a29aa7b4d49ae15152b9f37af33d97af8fdb916090e1371eab8c7e6b6c8742d4"
    releasesEtag: '"5dfdb27e317f51f6708674b354bef6c84a2f089d3da73adebb25b10dfa19fede"'
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
