---
name: rac4-decomp
slug: rac4-decomp-joansitoh
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
  repository: Joansitoh/rac4-decomp
  repositoryId: '1465778041'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-20T16:19:40Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-25T12:58:29.630Z'
automation:
  sync: true
  github:
    repoEtag: W/"ae1aaf45b93fa8ac7d2da6f9ca7452c644574bdc8a810fe594dea52e1f094c6b"
    releasesEtag: '"952d112940193fc284a4a141c569cf911c7e67981f382acfe4f6132ffdf8939d"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
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
