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
  stars: 2190
  forks: 174
  lastCommit: '2026-10-15T16:43:53Z'
latestRelease:
  tag: 2.8.3
  name: 'ARMSX2 2.8.3 '
  publishedAt: '2026-10-11T17:16:38Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/2.8.3'
activity:
  lastSynchronized: '2026-10-15T19:07:43.903Z'
automation:
  sync: true
  github:
    repoEtag: W/"67adc646b4f4857fe519bf8c3946c6102278034a859e235f9ddfb938e2f27d58"
    releasesEtag: W/"c74a74e40dfe495223824c10ff5c40959fda1f7045b8a1f827d274a470ebb070"
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
