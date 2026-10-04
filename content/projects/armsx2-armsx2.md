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
  stars: 2107
  forks: 150
  lastCommit: '2026-10-04T18:14:40Z'
latestRelease:
  tag: '2.8'
  name: 'ARMSX2 2.8 '
  publishedAt: '2026-10-03T23:34:39Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/2.8'
activity:
  lastSynchronized: '2026-10-04T19:37:54.913Z'
automation:
  sync: true
  github:
    repoEtag: W/"56860b13173ee93a4f8a6462dc2e0be5a55840ccd66e67880e6d6d5f62324fde"
    releasesEtag: W/"55d6e84d4d9fccc50122e0a45f4f9c7efd823bdb3e6051b095218134d1cdb5f7"
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
