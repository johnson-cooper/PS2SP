---
name: ps2-master-patcher
slug: ps2-master-patcher
summary: A command line tool to generate PlayStation 2 Master Discs
categories:
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: bucanero/ps2-master-patcher
  repositoryId: '1105626940'
repository:
  archived: false
  defaultBranch: main
  stars: 3
  forks: 0
  lastCommit: '2026-11-18T22:20:13Z'
latestRelease:
  tag: v1.0.0
  name: PS2 Master Disc Boot Patcher
  publishedAt: '2026-11-18T22:20:13Z'
  url: 'https://github.com/bucanero/ps2-master-patcher/releases/tag/v1.0.0'
activity:
  lastSynchronized: '2026-11-19T02:49:39.009Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - ps2-homebrew topic
    - PS2-specific topic
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release metadata identifies PS2
  maturity: released-active
verified: false
featured: false
hidden: false
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
