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
  stars: 2272
  forks: 196
  lastCommit: '2026-10-23T14:10:29Z'
latestRelease:
  tag: nightly-20261023
  name: ARMSX2 nightly 20261023 (90126bdfea)
  publishedAt: '2026-10-23T14:10:10Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/nightly-20261023'
activity:
  lastSynchronized: '2026-10-25T19:37:26.815Z'
automation:
  sync: true
  github:
    repoEtag: W/"10d386d35be671d6ba26624f977e8f8b0e278411b5aa297a28621a54993a8120"
    releasesEtag: W/"0bba235408b5815b6c1a53199ad09ede951e8ab2108f6bdaef900cbb9c4227e5"
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
