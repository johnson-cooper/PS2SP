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
  stars: 133
  forks: 11
  lastCommit: '2026-10-29T13:39:51Z'
latestRelease:
  tag: v1.10.0-reliquary
  name: v1.10.0-reliquary
  publishedAt: '2026-10-16T21:06:16Z'
  url: >-
    https://github.com/DiscoStarslayer/pcsx2-reliquary/releases/tag/v1.10.0-reliquary
activity:
  lastSynchronized: '2026-11-21T23:17:28.044Z'
automation:
  sync: true
  github:
    repoEtag: W/"869366f8dad3add6582a33cb3cf9ff0d63e040b0d946aa1fd7b92a66a34e4467"
    releasesEtag: W/"e0e6427d288e6735e85f33b52be86b54fc65ce972cf7288ea816d92b85a094e1"
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
