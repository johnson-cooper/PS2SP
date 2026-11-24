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
  lastSynchronized: '2026-11-24T06:04:16.978Z'
automation:
  sync: true
  github:
    repoEtag: W/"a44e85e4839d54de6df7c0620b7d9133a200307f81509116241186a4ce55290c"
    releasesEtag: W/"894cd689f5fd96dfa6d52e3cbede62445474913afca9dc9794efaed4f7d0d08c"
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
