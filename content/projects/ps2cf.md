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
  lastSynchronized: '2026-10-22T15:19:13.265Z'
automation:
  sync: true
  github:
    repoEtag: W/"687b7db82c695be0e3579cc01dcf773251965818fc63f9c9d88ec76f2e9aeb28"
    releasesEtag: W/"bd317a407f9ede3659ade4bec8b14b6f271ce5647f151d60a9b411412c1a2b04"
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
