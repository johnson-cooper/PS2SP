---
name: ps2sdk
slug: ps2sdk-israpps
summary: Homebrew PS2 SDK
categories:
  - sdks
  - development
tags:
  - ps2dev
  - sdk
  - toolchain
  - fork
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: israpps/ps2sdk
  repositoryId: '508077397'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2026-07-26T17:25:27Z'
latestRelease:
  tag: IRX_debug
  name: latest IRX Binaries
  publishedAt: '2025-05-07T18:48:30Z'
  url: 'https://github.com/israpps/ps2sdk/releases/tag/IRX_debug'
activity:
  lastSynchronized: '2026-11-11T15:14:46.937Z'
automation:
  sync: true
  github:
    repoEtag: W/"e7219c4923d5f2696db27feb7551020c4dff806e9da7d6bf5bb5e7e4f76e0a55"
    releasesEtag: W/"12fdaab42ec5ba467dd217c88de7c54f64a8118e18e434b13c585750e19a9dc5"
discovery:
  method: 'fork-network:ps2dev/ps2sdk'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2sdk'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2dev/ps2sdk
  source: ps2dev/ps2sdk
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
