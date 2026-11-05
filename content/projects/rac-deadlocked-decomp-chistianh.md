---
name: rac-deadlocked-decomp
slug: rac-deadlocked-decomp-chistianh
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
  repository: chistianh/rac-deadlocked-decomp
  repositoryId: '1426079448'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-04T01:53:59Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-05T12:23:27.679Z'
automation:
  sync: true
  github:
    repoEtag: W/"3ad1a31bfccf61f2a232dfa976a3de7b23fcbb5ba33ba9f83f1aebe71474ca75"
    releasesEtag: '"a265e13ba9964cb5149e04ac0bdf1bf82b2b42e69b35395c6e21fd78ae77d913"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: OpenRAC/rac-deadlocked-decomp'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: OpenRAC/rac-deadlocked-decomp
  source: OpenRAC/rac-deadlocked-decomp
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
