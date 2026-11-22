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
  lastSynchronized: '2026-11-22T19:40:58.018Z'
automation:
  sync: true
  github:
    repoEtag: W/"9f0ea795fe8dd01dc976ec9bd4c911ffb213ae9f58b735af6db9ef9c286a2bc3"
    releasesEtag: '"be8fef597ef8ce9597d3a28fb7d1db390e9074e959ad675a9c1e6fdb15755086"'
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
