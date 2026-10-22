---
name: rac1-decomp
slug: rac1-decomp-cblackler19
summary: 'Matching decompilation of Ratchet & Clank (2002, PS2)'
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
  repository: cblackler19/rac1-decomp
  repositoryId: '1415051719'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-18T05:03:31Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-22T15:19:45.224Z'
automation:
  sync: true
  github:
    repoEtag: W/"81e6e43720d0a0c04f951bfe4d776dbbf3fbbcea50930b142a0ad16a00fb97ce"
    releasesEtag: '"99dfab16a539fcae500c3d0e749ddca734427a46367bf6b00845c1e5b0a36b69"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: OpenRAC/rac1-decomp'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: OpenRAC/rac1-decomp
  source: OpenRAC/rac1-decomp
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
