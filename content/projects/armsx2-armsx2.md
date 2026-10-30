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
  stars: 2342
  forks: 211
  lastCommit: '2026-10-29T19:22:19Z'
latestRelease:
  tag: 2.9.1
  name: ARMSX2 2.9.1
  publishedAt: '2026-10-28T21:26:14Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/2.9.1'
activity:
  lastSynchronized: '2026-10-30T19:22:27.961Z'
automation:
  sync: true
  github:
    repoEtag: W/"1b7f91ea924d6547eada1871c67f5aafa32b6fc5c1e684beef8a14e51a4bc6d6"
    releasesEtag: W/"becf7b0a4da3a01d4b2531b3695edb53df26249ea49bdc091afc2cf7d49a7dd4"
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
