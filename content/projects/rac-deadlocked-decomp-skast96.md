---
name: rac-deadlocked-decomp
slug: rac-deadlocked-decomp-skast96
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
  repository: skast96/rac-deadlocked-decomp
  repositoryId: '1419809216'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-19T20:22:09Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-24T14:35:12.173Z'
automation:
  sync: true
  github:
    repoEtag: W/"189ca0a81d255e28c6f7cc17f79e2a19ff355f1bbb0073bdc053b7921c0eecc1"
    releasesEtag: '"94fbc3dfdcacf1e254cfcd39aeb7e8fce35a0ed1d132095cc974e5c6a70b4c5e"'
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
