---
name: gow-native-pc
slug: gow-native-pc
summary: >-
  Native Windows PC port of God of War (PS2), built by statically recompiling
  MIPS R5900 code to C++ with PS2Recomp. Includes an installer launcher,
  one-click build, fan-translation support and a 60 fps target. No game files
  included: you need your own copy.
categories:
  - launchers
  - preservation
  - development
  - games
  - ports
  - installers
tags:
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: Vnnc1/gow-native-pc
  repositoryId: '1432769925'
repository:
  archived: false
  defaultBranch: main
  stars: 285
  forks: 13
  lastCommit: '2026-11-14T04:01:30Z'
latestRelease:
  tag: v0.6.1
  name: >-
    v0.6.1 — Stable in-game menu, native save slots, shipped PGO and reliable
    keyboard QTEs
  publishedAt: '2026-11-14T04:01:30Z'
  url: 'https://github.com/Vnnc1/gow-native-pc/releases/tag/v0.6.1'
activity:
  lastSynchronized: '2026-11-26T15:17:30.716Z'
automation:
  sync: true
  github:
    repoEtag: W/"d50bd19a47d7461d9a164e0ee8828f641aebeac656a883a5f222d20344c7eafb"
    releasesEtag: W/"17d953687c5e82a60083901ecc8b5f4ef346673a5e619e6b88b7706d0996f146"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
