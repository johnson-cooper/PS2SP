---
name: pcsx2
slug: pcsx2-yxmline
summary: PCSX2 - The Playstation 2 Emulator
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'http://pcsx2.net/'
source:
  provider: github
  repository: yxmline/pcsx2
  repositoryId: '44362681'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 1
  lastCommit: '2026-10-29T00:20:07Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-29T07:06:56.762Z'
automation:
  sync: true
  github:
    repoEtag: W/"5256cb8069ad87b68718c0ee3f129586f56cb4b0bedbfa1170d1660ccc0ec1a7"
    releasesEtag: '"0e55d62a156b051eca49228a211e37e97ef1756e978a92491825b134ce41ed33"'
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
