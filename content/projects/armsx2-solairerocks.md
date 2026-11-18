---
name: ARMSX2
slug: armsx2-solairerocks
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
  repository: SolaireRocks/ARMSX2
  repositoryId: '1448921974'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-18T18:38:28Z'
latestRelease:
  tag: armsx2-custom-latest
  name: ARMSX2 Custom (custom-5c8b8b41)
  publishedAt: '2026-11-07T03:49:58Z'
  url: 'https://github.com/SolaireRocks/ARMSX2/releases/tag/armsx2-custom-latest'
activity:
  lastSynchronized: '2026-11-18T21:36:13.229Z'
automation:
  sync: true
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
hidden: false
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
