---
name: PS2CF
slug: ps2cf
summary: >-
  CompactFlash and MicroSD support for early PlayStation 2 PC CARD models: OPL
  CF and wLaunchELF CF.
categories:
  - loaders
  - launchers
tags:
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: mihhru/PS2CF
  repositoryId: '1419844384'
repository:
  archived: false
  defaultBranch: main
  stars: 4
  forks: 0
  lastCommit: '2026-10-14T20:58:04Z'
latestRelease:
  tag: v1.0
  name: PS2CF — Release 1.0
  publishedAt: '2026-10-14T20:59:09Z'
  url: 'https://github.com/mihhru/PS2CF/releases/tag/v1.0'
activity:
  lastSynchronized: '2026-11-01T15:10:53.813Z'
automation:
  sync: true
  github:
    repoEtag: W/"775a6e26ce6db8a09069a6ab8440eaaf99eda08a6177510d1903c0a0e5ce0611"
    releasesEtag: W/"6317534476bf07a0da64c3efffade842da48cc3259eea2c7bafbb6316e9178ad"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - README identifies PS2 homebrew
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
