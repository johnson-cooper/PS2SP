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
  lastSynchronized: '2026-10-04T15:23:09.151Z'
automation:
  sync: true
  github:
    repoEtag: W/"4fa8478a44a7a5fb33816ce4be2d940e1dd2115519cb49ab2887c3547ee9ffc2"
    releasesEtag: '"88e3252b024a81bfe2859d1e26a4b9b16c85c9ea992575462dfbfa456c717306"'
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
