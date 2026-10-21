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
  stars: 123
  forks: 9
  lastCommit: '2026-10-16T20:47:01Z'
latestRelease:
  tag: v1.10.0-reliquary
  name: v1.10.0-reliquary
  publishedAt: '2026-10-16T21:06:16Z'
  url: >-
    https://github.com/DiscoStarslayer/pcsx2-reliquary/releases/tag/v1.10.0-reliquary
activity:
  lastSynchronized: '2026-10-21T23:20:33.179Z'
automation:
  sync: true
  github:
    repoEtag: W/"2adda073625837023cb86a77e24a03b0bdc896c9a003cbe050d191fcca476f9a"
    releasesEtag: W/"74b2f71c9c093c59c099efd3e3958096d23acc23b28d1992a6f095458c3bd4be"
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
