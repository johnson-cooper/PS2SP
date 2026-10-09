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
  lastSynchronized: '2026-10-09T16:13:28.338Z'
automation:
  sync: true
  github:
    repoEtag: W/"9934e0a768ef46d6ae00edd0bdff887157ab7ffd9328ba5958d19e5844cb8576"
    releasesEtag: W/"ab8a665ecfeaac5e7b436e7e5775a9a2a4c9dd442eac66f57efaead7f1c3ac54"
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
