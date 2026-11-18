---
name: ps2srvman
slug: ps2srvman
summary: ART and VMC Manager for a PS2 network share
categories:
  - save-tools
  - networking
tags:
  - auto-discovered
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: dq193/ps2srvman
  repositoryId: '1462099640'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2026-11-18T19:44:47Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-18T21:36:13.229Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - ps2-homebrew topic
    - PS2-specific topic
    - repository description explicitly identifies PS2
  maturity: active-unreleased
verified: false
featured: false
hidden: false
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
