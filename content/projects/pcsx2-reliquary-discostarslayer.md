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
  stars: 122
  forks: 9
  lastCommit: '2026-10-16T20:47:01Z'
latestRelease:
  tag: v1.9.4-reliquary
  name: v1.9.4-reliquary
  publishedAt: '2026-09-09T16:34:01Z'
  url: >-
    https://github.com/DiscoStarslayer/pcsx2-reliquary/releases/tag/v1.9.4-reliquary
activity:
  lastSynchronized: '2026-10-18T23:13:29.414Z'
automation:
  sync: true
  github:
    repoEtag: W/"8e9090e6a484961ad38e9b785623995f1ec19ca561d10a1ac17309a1622e8b8e"
    releasesEtag: W/"e34e5bbd6769cc8bf2ac713bbc22258bde0beb9130047499aa80fb89441abf11"
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
