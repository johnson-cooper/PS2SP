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
  lastSynchronized: '2026-11-02T15:52:32.373Z'
automation:
  sync: true
  github:
    repoEtag: W/"814c299335c15c1589f5c5c6d9c77a949998e5a4aae4a29c6d8686e1854b6a87"
    releasesEtag: W/"a61d014a66e1f1e5cf81802b8a3a1ebfa5917ec060e8805f852700aae7478d4a"
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
