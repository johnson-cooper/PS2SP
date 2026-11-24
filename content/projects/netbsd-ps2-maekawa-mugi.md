---
name: NetBSD-PS2
slug: netbsd-ps2-maekawa-mugi
summary: NetBSD for PlayStation2 without SIF BIOS (SBIOS)
categories:
  - utilities
tags:
  - fork
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: maekawa-mugi/NetBSD-PS2
  repositoryId: '1421022487'
repository:
  archived: false
  defaultBranch: trunk
  stars: 1
  forks: 0
  lastCommit: '2026-11-24T04:45:10Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-24T04:59:15.384Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: NetBSD/src
  source: NetBSD/src
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
