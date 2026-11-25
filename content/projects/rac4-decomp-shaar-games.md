---
name: rac4-decomp
slug: rac4-decomp-shaar-games
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
  repository: Shaar-games/rac4-decomp
  repositoryId: '1437491059'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-21T00:25:37Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-25T02:31:21.825Z'
automation:
  sync: true
  github:
    repoEtag: W/"c5aac7a8447c810818c337436b6b8531e716f3d5f98d0619815f64070ca5225d"
    releasesEtag: '"ad1a1ec552bf400ecf3a617d2c9aa1202b8cfcc5dd53e2a67ba715368e1da051"'
discovery:
  method: 'incremental:ps2 in:name,description'
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
