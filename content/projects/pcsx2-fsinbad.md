---
name: pcsx2
slug: pcsx2-fsinbad
summary: PCSX2 - The Playstation 2 Emulator
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: 'https://pcsx2.net'
source:
  provider: github
  repository: fsinbad/pcsx2
  repositoryId: '829198126'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-08T20:39:56Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-08T15:14:05.864Z'
automation:
  sync: true
  github:
    repoEtag: W/"72908d5dce84f921c6b17a1ab01663fe9ca27d0a10735ae8cbe9a2f9271c7bca"
    releasesEtag: '"92e2f2afde06cfa79fae294d94e1123ac5d56a202679866d4fecc6991c5d3df0"'
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
