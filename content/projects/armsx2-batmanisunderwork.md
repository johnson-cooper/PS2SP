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
  lastSynchronized: '2026-11-03T15:08:18.123Z'
automation:
  sync: true
  github:
    repoEtag: W/"38ca323b9626c3f6ddf482a08d378cfe3bb23a7b5393499438b94bd2f055f56f"
    releasesEtag: W/"ae02018fd6bf820c58f956066f6382b8fce648750b07cc8062bd6b06d9e3a083"
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
