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
  stars: 240
  forks: 9
  lastCommit: '2026-11-11T14:39:57Z'
latestRelease:
  tag: v0.5.0
  name: >-
    v0.5.0 — Experimental Linux, CHD import, regional editions and accessibility
    improvements
  publishedAt: '2026-11-03T00:10:26Z'
  url: 'https://github.com/Vnnc1/gow-native-pc/releases/tag/v0.5.0'
activity:
  lastSynchronized: '2026-11-11T15:12:47.394Z'
automation:
  sync: true
  github:
    repoEtag: W/"c9b2f81881801221c0499618fcd8be4e9b397de7fb4a609c2df4f8ea7ef2dc0e"
    releasesEtag: W/"01a3035362dd313d318a898f9c6d37d8535b50be71901cb8dad56e5018abcca7"
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
