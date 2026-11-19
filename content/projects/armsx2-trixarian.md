---
name: ARMSX2
slug: armsx2-trixarian
summary: ARMSX2 - The Playstation 2 Emulator for ARM64 Platforms
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://armsx2.net/'
source:
  provider: github
  repository: Trixarian/ARMSX2
  repositoryId: '1084313608'
repository:
  archived: false
  defaultBranch: master
  stars: 4
  forks: 0
  lastCommit: '2025-12-10T10:26:48Z'
latestRelease:
  tag: come.nanodata.armsx2-nightly-1.0.5-20251120-2349
  name: Nightly Build (DEBUG - 1.0.5) - 20251120-2349
  publishedAt: '2025-11-20T23:49:01Z'
  url: >-
    https://github.com/Trixarian/ARMSX2/releases/tag/come.nanodata.armsx2-nightly-1.0.5-20251120-2349
activity:
  lastSynchronized: '2026-11-19T21:34:31.755Z'
automation:
  sync: true
  github:
    repoEtag: W/"b6544babc88e5d21ee31132ab9b8f60b9a6f04ff5f104f3e722ceff6655a137b"
    releasesEtag: W/"40b3c4c770daf5695efe8438bac2b1772a1a1e0cba12498bb8beb1315168d295"
discovery:
  method: 'fork-network:ARMSX2/ARMSX2'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
