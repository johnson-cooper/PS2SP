---
name: ARMSX2
slug: armsx2-armsx2
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
  repository: ARMSX2/ARMSX2
  repositoryId: '1036246172'
repository:
  archived: false
  defaultBranch: master
  stars: 2356
  forks: 214
  lastCommit: '2026-11-01T19:39:17Z'
latestRelease:
  tag: 2.9.1
  name: ARMSX2 2.9.1
  publishedAt: '2026-10-28T21:26:14Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/2.9.1'
activity:
  lastSynchronized: '2026-11-01T19:40:29.557Z'
automation:
  sync: true
  github:
    repoEtag: W/"e04ecf6b1f86983c1168428ce4f715dd3b6bed25aab3b8e55d9f2488aeccb92a"
    releasesEtag: W/"b40a8a75aa305bcf9c81554721978eec9d8ed739922ca341c583e4dfdc5a151d"
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
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
