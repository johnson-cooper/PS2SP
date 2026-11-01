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
  stars: 151
  forks: 3
  lastCommit: '2026-11-01T03:12:42Z'
latestRelease:
  tag: v0.4.0
  name: >-
    v0.4.0 — Shipped PGO profile, Fast VU mode, hold instead of mashing and
    clear install/GPU errors
  publishedAt: '2026-11-01T02:39:25Z'
  url: 'https://github.com/Vnnc1/gow-native-pc/releases/tag/v0.4.0'
activity:
  lastSynchronized: '2026-11-01T15:09:38.207Z'
automation:
  sync: true
  github:
    repoEtag: W/"9af735cfef8df704496ec48e629708e6b5a1274bf99593f660257908db83b968"
    releasesEtag: W/"c77b173beaf4531155662a14c4a1b0d55e1480bd8074d6f312b4f24264bc7597"
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
