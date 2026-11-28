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
  lastCommit: '2026-11-28T18:52:46Z'
latestRelease:
  tag: armsx2-custom-latest
  name: ARMSX2 Custom (custom-35778138)
  publishedAt: '2026-11-28T18:52:47Z'
  url: 'https://github.com/SolaireRocks/ARMSX2/releases/tag/armsx2-custom-latest'
activity:
  lastSynchronized: '2026-11-28T18:58:01.226Z'
automation:
  sync: true
  github:
    repoEtag: W/"96c27740819a5511ec5bc91d79f58adf016b56d0cc05fbefb70ec5b2a9c3b75f"
    releasesEtag: W/"8acd10b934cad196bbe77797fe22faaee70fcf7907c8cf1964c496dadd485676"
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
