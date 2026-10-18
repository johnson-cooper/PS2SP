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
  lastCommit: '2026-10-18T10:29:25Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-18T14:36:19.339Z'
automation:
  sync: true
  github:
    repoEtag: W/"acb51cb79a93df0eddbb27036778c502c59b1bc816e6bfbad24e6ba9975aebde"
    releasesEtag: '"c640920e4e9bca10914115fba992c8215e6aa10a4c5308ecfe128fe0d3464883"'
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
