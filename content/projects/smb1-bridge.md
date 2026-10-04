---
name: smb1-bridge
slug: smb1-bridge
summary: >-
  Serve modern SMB3 shares to Windows XP, 2000, NT 4.0 and the PS2 over SMB1,
  without turning SMB1 on anywhere else.
categories:
  - host-tools
  - networking
tags:
  - auto-discovered
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: himi9046-hub/smb1-bridge
  repositoryId: '1389809004'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-09-26T21:33:35Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-04T15:24:02.717Z'
automation:
  sync: true
  github:
    repoEtag: W/"1dab1f3d7a75b30856361180279d6b9aea0ec7af503a4c2ed5b658cc13c6878a"
    releasesEtag: '"88e3252b024a81bfe2859d1e26a4b9b16c85c9ea992575462dfbfa456c717306"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
  maturity: active-unreleased
verified: false
featured: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
