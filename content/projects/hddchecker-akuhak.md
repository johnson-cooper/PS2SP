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
  lastSynchronized: '2026-10-25T16:20:03.880Z'
automation:
  sync: true
  github:
    repoEtag: W/"56aaa77fdd6d2deab6843d423b833f0da9df40b7529690b56ae55bade524fdc7"
    releasesEtag: W/"60f26931135942e239d30981c453b5c1bc3dcbac695da90737a8df90016dc477"
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
