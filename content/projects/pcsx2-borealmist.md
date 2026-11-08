---
name: pcsx2
slug: pcsx2-borealmist
summary: PCSX2 - The Playstation 2 Emulator
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://pcsx2.net'
source:
  provider: github
  repository: BorealMist/pcsx2
  repositoryId: '1441087294'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-31T17:41:48Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-08T19:43:28.467Z'
automation:
  sync: true
  github:
    repoEtag: W/"c7bae5e787937dd25d0a4a114c318b7383aba4136420bedb123e5e7af50dee78"
    releasesEtag: '"2d77d78d9406dfdb04f6cdb831785e70ead0264c82109729acd315cd0faa00fd"'
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
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
