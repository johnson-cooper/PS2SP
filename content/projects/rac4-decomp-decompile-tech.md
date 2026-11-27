---
name: rac4-decomp
slug: rac4-decomp-decompile-tech
summary: 'Matching decompilation of Ratchet: Deadlocked (2005, PS2)'
categories:
  - preservation
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://openrac.dev/'
source:
  provider: github
  repository: decompile-tech/rac4-decomp
  repositoryId: '1435293028'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-24T10:06:55Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-27T08:36:58.676Z'
automation:
  sync: true
  github:
    repoEtag: W/"3159fe0115a5150c9f46b55e74f6014213fcbe4f63c129f204f4d15b376f5436"
    releasesEtag: '"16208236851f74c42eac13873cc4181c55047f06f9f0e8a4ed3bfffb11ba8a51"'
discovery:
  method: 'fork-network:OpenRAC/rac-deadlocked-decomp'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: OpenRAC/rac4-decomp'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: OpenRAC/rac4-decomp
  source: OpenRAC/rac4-decomp
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
