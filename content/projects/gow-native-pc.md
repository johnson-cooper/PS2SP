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
  stars: 172
  forks: 4
  lastCommit: '2026-11-01T03:12:42Z'
latestRelease:
  tag: v0.4.0
  name: >-
    v0.4.0 — Shipped PGO profile, Fast VU mode, hold instead of mashing and
    clear install/GPU errors
  publishedAt: '2026-11-01T02:39:25Z'
  url: 'https://github.com/Vnnc1/gow-native-pc/releases/tag/v0.4.0'
activity:
  lastSynchronized: '2026-11-02T15:53:08.367Z'
automation:
  sync: true
  github:
    repoEtag: W/"51b6ba69bae630b3bcf7d1948da3fb2adb41c3b274524cbd16b2a0dc6883edb9"
    releasesEtag: W/"3b985bc3f43c36cfa7407d4ded7097008915ca61c30849479b50138a05653fbc"
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
