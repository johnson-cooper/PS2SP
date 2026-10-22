---
name: HDDChecker
slug: hddchecker-ahmedmoselhi
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
  repository: ahmedmoselhi/HDDChecker
  repositoryId: '548006326'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2022-10-08T18:48:38Z'
latestRelease:
  tag: latest
  name: ''
  publishedAt: '2022-10-08T18:48:38Z'
  url: 'https://github.com/ahmedmoselhi/HDDChecker/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-22T19:16:02.986Z'
automation:
  sync: true
  github:
    repoEtag: W/"3046c1ec6e220e0175599b1ec86e6caca287833711704346c27ef84dc396fea2"
    releasesEtag: W/"37a818524939d49d930999fff76989b2d74020d0ceea44a0a68e82abdab4de96"
discovery:
  method: 'fork-network:ps2homebrew/HDDChecker'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2homebrew/HDDChecker'
  maturity: released-legacy
verified: false
featured: false
relationships:
  forkOf: ps2homebrew/HDDChecker
  source: ps2homebrew/HDDChecker
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
