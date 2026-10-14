---
name: pcsx2-reliquary
slug: pcsx2-reliquary-discostarslayer
summary: PCSX2 Reliquary - PS2 Emulator for the nerds
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: DiscoStarslayer/pcsx2-reliquary
  repositoryId: '1226518373'
repository:
  archived: false
  defaultBranch: master
  stars: 121
  forks: 9
  lastCommit: '2026-10-12T01:05:30Z'
latestRelease:
  tag: v1.9.4-reliquary
  name: v1.9.4-reliquary
  publishedAt: '2026-09-09T16:34:01Z'
  url: >-
    https://github.com/DiscoStarslayer/pcsx2-reliquary/releases/tag/v1.9.4-reliquary
activity:
  lastSynchronized: '2026-10-14T23:55:54.251Z'
automation:
  sync: true
  github:
    repoEtag: W/"0b25615ac1f000a92b67cad5e16002e10a2f5b0cf2e0e37e5cc64c0fc7cffeb0"
    releasesEtag: W/"b1af63b7b02593eb69da2bb968ff1ed13b6cdf97fcb90aae87413be62e80d31c"
discovery:
  method: 'incremental:ps2 in:name,description'
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
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
