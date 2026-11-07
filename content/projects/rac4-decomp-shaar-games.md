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
  lastCommit: '2026-11-06T06:10:47Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-07T02:50:45.175Z'
automation:
  sync: true
  github:
    repoEtag: W/"cea7bec74da1afca5e1a68df08a925eb937b62e75f813b6c710e20caa05d90ff"
    releasesEtag: '"66580e2e5c97541a97f5eccf517b2285a1cf142e3029f5f841172d71e5b0149b"'
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
