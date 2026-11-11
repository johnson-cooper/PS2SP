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
  lastSynchronized: '2026-11-11T15:15:03.031Z'
automation:
  sync: true
  github:
    repoEtag: W/"c99d2b1d83baacc946686f6f51f6d74c2a358648cf03b3f1ec0db294e00df4b9"
    releasesEtag: '"4429150f34678cedd74c64579b30809858d8cdb312b1ed77eb714a79c20f6fb1"'
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
