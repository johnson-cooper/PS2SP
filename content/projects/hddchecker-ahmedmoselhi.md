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
  lastSynchronized: '2026-10-17T19:24:43.526Z'
automation:
  sync: true
  github:
    repoEtag: W/"03c2c8f5bd2040b80743877a20ad3caa83277ecec25da935108ef3368e71d13d"
    releasesEtag: W/"be1049910c937bb10aa41956222879a8750249df1cda535e4e13361289e18ac7"
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
