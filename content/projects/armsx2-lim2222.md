---
name: ARMSX2
slug: armsx2-lim2222
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
  repository: lim2222/ARMSX2
  repositoryId: '1420344860'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-15T07:51:04Z'
latestRelease:
  tag: TaikoV1.0
  name: ARMSX2 Taiko 2.8.3+taiko1.0
  publishedAt: '2026-10-15T07:51:04Z'
  url: 'https://github.com/lim2222/ARMSX2/releases/tag/TaikoV1.0'
activity:
  lastSynchronized: '2026-10-17T05:49:52.160Z'
automation:
  sync: true
  github:
    repoEtag: W/"4bf56ba093a8f92e2a4959ae3d3cbd20d400eb444a9da4ec3c3477f001dbf26c"
    releasesEtag: W/"82169bf77a11d9ed4c4613dbfafa84c810a2db3d41e8cafdbc32b379efa5d567"
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
