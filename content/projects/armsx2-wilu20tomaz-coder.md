---
name: ARMSX2
slug: armsx2-wilu20tomaz-coder
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
  repository: wilu20tomaz-coder/ARMSX2
  repositoryId: '1426269571'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-19T23:32:55Z'
latestRelease:
  tag: zodiaco-1
  name: ARMSX2 Zodíaco (build 1)
  publishedAt: '2026-10-19T23:32:55Z'
  url: 'https://github.com/wilu20tomaz-coder/ARMSX2/releases/tag/zodiaco-1'
activity:
  lastSynchronized: '2026-11-12T18:56:08.480Z'
automation:
  sync: true
  github:
    repoEtag: W/"603e8fe8a6444230bcf7519ca1e19f5369ec851bcea35af0fc9f8d79bec0bb2f"
    releasesEtag: W/"a296124ed15039ee32722a301105269aa2d0ad45682f87f3960793246906d639"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
