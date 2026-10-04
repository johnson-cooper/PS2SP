---
name: ARMSX2
slug: armsx2-batmanisunderwork
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
  repository: batmanisunderwork/ARMSX2
  repositoryId: '1396485695'
repository:
  archived: false
  defaultBranch: phone-input
  stars: 0
  forks: 0
  lastCommit: '2026-10-02T06:24:53Z'
latestRelease:
  tag: netplay-test-39
  name: 'Netplay test build (Windows x64) #39'
  publishedAt: '2026-10-02T06:24:53Z'
  url: 'https://github.com/batmanisunderwork/ARMSX2/releases/tag/netplay-test-39'
activity:
  lastSynchronized: '2026-10-04T15:23:00.180Z'
automation:
  sync: true
  github:
    repoEtag: W/"c80b5631d1ca90eef4ebfd8fd1cd3dd5918107e67850f10349f1a2a3e8553e53"
    releasesEtag: W/"e60b8ca3bdfae507656047552f432ac47151c8b293d7ae0a5f4c2981932d6600"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
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
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
