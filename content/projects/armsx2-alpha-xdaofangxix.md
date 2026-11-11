---
name: ARMSX2-Alpha
slug: armsx2-alpha-xdaofangxix
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
  repository: XDaoFangxiX/ARMSX2-Alpha
  repositoryId: '1327159727'
repository:
  archived: false
  defaultBranch: testing-dev-plus
  stars: 10
  forks: 0
  lastCommit: '2026-10-19T08:46:46Z'
latestRelease:
  tag: 2.9.7-build.48
  name: Alpha 2.9.7-build.48
  publishedAt: '2026-10-19T08:46:57Z'
  url: 'https://github.com/XDaoFangxiX/ARMSX2-Alpha/releases/tag/2.9.7-build.48'
activity:
  lastSynchronized: '2026-11-11T15:12:02.045Z'
automation:
  sync: true
  github:
    repoEtag: W/"7e4b835777d0e969c5d8b170912b2f37493d5a4125e7de23251059a02212e8a8"
    releasesEtag: W/"97ed9454c4b57634d1880b786c4852178a672dc7c5285cd41cfc556d55f1c7e2"
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
