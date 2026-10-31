---
name: pocket-ps2-server
slug: pocket-ps2-server
summary: >-
  Android app that serves PS2 games over an Ethernet cable (SMB1 for OPL, UDPFS,
  UDPBD). No PC needed.
categories:
  - loaders
  - networking
tags:
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: wraphs/pocket-ps2-server
  repositoryId: '1440899726'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-31T16:36:45Z'
latestRelease:
  tag: v1.0.1
  name: Pocket PS2 Server 1.0.1
  publishedAt: '2026-10-31T16:36:46Z'
  url: 'https://github.com/wraphs/pocket-ps2-server/releases/tag/v1.0.1'
activity:
  lastSynchronized: '2026-10-31T18:45:56.304Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release metadata identifies PS2
  maturity: prerelease-only
verified: false
featured: false
hidden: false
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
