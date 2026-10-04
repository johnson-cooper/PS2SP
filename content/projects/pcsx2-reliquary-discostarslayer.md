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
  stars: 118
  forks: 8
  lastCommit: '2026-10-03T18:22:59Z'
latestRelease:
  tag: v1.9.4-reliquary
  name: v1.9.4-reliquary
  publishedAt: '2026-09-09T16:34:01Z'
  url: >-
    https://github.com/DiscoStarslayer/pcsx2-reliquary/releases/tag/v1.9.4-reliquary
activity:
  lastSynchronized: '2026-10-04T23:11:23.660Z'
automation:
  sync: true
  github:
    repoEtag: W/"a47376c4faa0ccdeece49dd6af4f3436578e2592b28c34be2a5b7ac22f9aa3f9"
    releasesEtag: W/"a7b6399dedb5b6667430bafcf7303b51ff335588c5d846ae4d95935607bd30be"
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
