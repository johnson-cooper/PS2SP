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
  stars: 126
  forks: 10
  lastCommit: '2026-10-29T13:39:51Z'
latestRelease:
  tag: v1.10.0-reliquary
  name: v1.10.0-reliquary
  publishedAt: '2026-10-16T21:06:16Z'
  url: >-
    https://github.com/DiscoStarslayer/pcsx2-reliquary/releases/tag/v1.10.0-reliquary
activity:
  lastSynchronized: '2026-11-06T23:09:41.410Z'
automation:
  sync: true
  github:
    repoEtag: W/"e6f9545f7fb7829ec7b4db900974bd2d5b63b24d0344133e5590cc90d607a513"
    releasesEtag: W/"12a16b105e0693f78fd9dc505604b2a74051a5d9fa645a8c835e59cc20702c9c"
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
