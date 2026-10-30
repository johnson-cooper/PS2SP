---
name: God-Of-War-Native-Port
slug: god-of-war-native-port-codeabhi826
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
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: CodeAbhi826/God-Of-War-Recomp
  repositoryId: '1427823371'
repository:
  archived: false
  defaultBranch: android
  stars: 0
  forks: 0
  lastCommit: '2026-10-24T04:23:33Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-30T19:22:54.621Z'
automation:
  sync: true
  github:
    repoEtag: W/"08554229b0acc9b6cc6709ee53f26d78ed785d4594b231ab0c8fbd3d3e1a548d"
    releasesEtag: '"4e5a0754123e150edd35f63c077b092fc8acf1f99673343fdbd321eefe2fd689"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - >-
      fork lineage traces to indexed PS2 project:
      Waffle565/God-Of-War-Native-Port
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: Waffle565/God-Of-War-Native-Port
  source: Waffle565/God-Of-War-Native-Port
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
