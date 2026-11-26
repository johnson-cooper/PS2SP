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
  lastSynchronized: '2026-11-26T15:19:25.313Z'
automation:
  sync: true
  github:
    repoEtag: W/"f78f96b645a283deff14a566f6d3171342a27b3c6cb0c4f413736dc855025d4c"
    releasesEtag: W/"a6379c87bc010f17af572d6e65f65a80cfdfef3df305ea06850aa009c190328a"
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
