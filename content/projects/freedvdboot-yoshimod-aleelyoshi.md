---
name: FreeDVDBoot-YoshiMod
slug: freedvdboot-yoshimod-aleelyoshi
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
  repository: aleelyoshi/FreeDVDBoot-YoshiMod
  repositoryId: '1391223456'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 0
  lastCommit: '2026-09-29T17:46:19Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-21T19:19:49.581Z'
automation:
  sync: true
  github:
    repoEtag: W/"64bcf7390ac54c542d133f009f7e4f63f3a76d26f5a176cd67cec6c87100e6ef"
    releasesEtag: '"4c931b40b872dc6bf0b1ac9708452c01e314f3374c26fa0dbd2bd31ee8a7dcb7"'
discovery:
  method: 'incremental:topic:ps2'
  confidence: 100
  evidence:
    - ps2-homebrew topic
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CTurt/FreeDVDBoot'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
