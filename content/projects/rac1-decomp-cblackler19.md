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
  lastCommit: '2026-10-14T13:48:19Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-15T15:03:13.883Z'
automation:
  sync: true
  github:
    repoEtag: W/"42fc1cebc263b0e30346960e75aefe5736e548868e07c06e4a327bdeb2548d73"
    releasesEtag: '"18bd9b81563aa7db63bba35858382769e5316c9fa3f022cec109596c7cd5f2b3"'
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
