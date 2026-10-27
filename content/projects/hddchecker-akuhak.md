---
name: HDDChecker
slug: hddchecker-akuhak
summary: >-
  PlayStation 2 hard disk diagnostic utility that checks surface health,
  verifies APA partitions, and repairs file systems.
categories:
  - utilities
tags:
  - hdd
  - diagnostics
  - fork
  - auto-discovered
features:
  - hdd
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: AKuHAK/HDDChecker
  repositoryId: '459528473'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2025-05-05T20:23:19Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2022-09-04T12:32:30Z'
  url: 'https://github.com/AKuHAK/HDDChecker/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-27T16:39:42.550Z'
automation:
  sync: true
  github:
    repoEtag: W/"7b00bc2dfb551eae5b2177210781239f0529a042fed04205adceb6e630aa13dc"
    releasesEtag: W/"dc69cbd6ea9096c611df92c73269d1f2ffa39e02cdd7c64fcef75c94de0a6aa0"
discovery:
  method: 'fork-network:ps2homebrew/HDDChecker'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/HDDChecker'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/HDDChecker
  source: ps2homebrew/HDDChecker
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
