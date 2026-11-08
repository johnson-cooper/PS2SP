---
name: ARMSX2
slug: armsx2-jetup13
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
  repository: Jetup13/ARMSX2
  repositoryId: '1086553211'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2025-12-22T08:42:09Z'
latestRelease:
  tag: come.nanodata.armsx2-nightly-1.0.7-20251127-0924
  name: Nightly Build (DEBUG - 1.0.7) - 20251127-0924
  publishedAt: '2025-11-27T09:24:13Z'
  url: >-
    https://github.com/Jetup13/ARMSX2/releases/tag/come.nanodata.armsx2-nightly-1.0.7-20251127-0924
activity:
  lastSynchronized: '2026-11-08T15:13:04.028Z'
automation:
  sync: true
  github:
    repoEtag: W/"1aab41e2be9d92d4763c6c98244b4a9a67099f78270f48662715c14386fbc382"
    releasesEtag: W/"992b214118fc06348a5de6a717b9bd46d4cfe0b8a1572f5e6ef2e85b3738b18f"
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
