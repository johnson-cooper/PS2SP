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
  stars: 225
  forks: 8
  lastCommit: '2026-11-07T22:40:46Z'
latestRelease:
  tag: v0.5.0
  name: >-
    v0.5.0 — Experimental Linux, CHD import, regional editions and accessibility
    improvements
  publishedAt: '2026-11-03T00:10:26Z'
  url: 'https://github.com/Vnnc1/gow-native-pc/releases/tag/v0.5.0'
activity:
  lastSynchronized: '2026-11-08T15:13:29.245Z'
automation:
  sync: true
  github:
    repoEtag: W/"91b329079e2dda4ff79ca32256fcfbfe984bc3059f4868cd3bcc132cbf530440"
    releasesEtag: W/"82cd54f013f7f3f8ab16d934157ad47908feaf2e1cac2557f8e7900d7468e3fa"
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
