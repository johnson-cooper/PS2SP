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
  lastSynchronized: '2026-10-21T15:16:05.392Z'
automation:
  sync: true
  github:
    repoEtag: W/"b2cd88aa5e5b28ff21f6fbe74018b102bb080814f5df7dc32913691198973376"
    releasesEtag: W/"f648ec642a87ae1d9a331fc9c0087c6ca2d38a05ce0b3e0124829c030a089394"
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
