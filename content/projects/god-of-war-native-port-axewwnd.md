---
name: God-Of-War-Native-Port
slug: god-of-war-native-port-axewwnd
summary: >-
  A native PC port of God of War (PS2, NTSC-U SCUS-97399): the game's code is
  statically recompiled to C++, and the PS2 hardware it talked to is replaced by
  native code, not emulated.
categories:
  - ports
  - games
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Axewwnd/God-Of-War-Native-Port
  repositoryId: '1438916490'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-30T10:36:20Z'
latestRelease:
  tag: ares-turnip-driver-test-v0.2.0
  name: ARES 0.2 — prueba de Turnip; port GS pendiente
  publishedAt: '2026-10-30T00:37:39Z'
  url: >-
    https://github.com/Axewwnd/God-Of-War-Native-Port/releases/tag/ares-turnip-driver-test-v0.2.0
activity:
  lastSynchronized: '2026-11-09T06:28:59.227Z'
automation:
  sync: true
  github:
    repoEtag: W/"8b239814678228f4e68793ead9cca89a189612ae6a31233f0e3f010159add8ca"
    releasesEtag: W/"c322b8c2b8d019edfecb4c299cab59dc569df0157324c04db9fa7db0321d8203"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - >-
      fork lineage traces to indexed PS2 project:
      Waffle565/God-Of-War-Native-Port
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: Waffle565/God-Of-War-Native-Port
  source: Waffle565/God-Of-War-Native-Port
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
