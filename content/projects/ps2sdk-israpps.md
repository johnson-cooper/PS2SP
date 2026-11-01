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
  lastSynchronized: '2026-11-01T15:11:03.198Z'
automation:
  sync: true
  github:
    repoEtag: W/"a527fb92ccf091ac9fbc70803691658f6c82e4da480a5b401027709e23ed1796"
    releasesEtag: W/"025ed3a924ae5f39ee341f736fff9a1073d918032b9299a89a9c34e500afe713"
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
