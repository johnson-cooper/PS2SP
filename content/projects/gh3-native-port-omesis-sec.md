---
name: gh3-native-port
slug: gh3-native-port-omesis-sec
summary: >-
  Experimental native Windows port of Guitar Hero III (PS2 SLUS-21672). Bring
  your own original disc; no game files included.
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - pending-promoted
  - prerelease-only
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: omesis-sec/gh3-native-port
  repositoryId: '1440342618'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-31T16:28:21Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-11T06:21:25.314Z'
automation:
  sync: true
  github:
    repoEtag: W/"900fb085ee46691eb77314a2b38e25cf9b3ee0d64887c17178eb29a93a961dd8"
    releasesEtag: '"9c1d5d6c02bd03431bec9aa3b1b361ec1aa0f9e1da99d100fa686668ec8ecaad"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ran-j/PS2Recomp'
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: ran-j/PS2Recomp
  source: ran-j/PS2Recomp
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
