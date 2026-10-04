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
  lastSynchronized: '2026-10-04T19:38:04.822Z'
automation:
  sync: true
  github:
    repoEtag: W/"5b1b833a87a62b67a5258b76cb5da65b5c1161caa3010af2fea1c1243b6b3ee3"
    releasesEtag: '"c3e1ce6b3a20a0f838b2575890f2460f8868a06dc7cb6fca6ad54170fd6df97a"'
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
