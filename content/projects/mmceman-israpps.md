---
name: mmceman
slug: mmceman-israpps
summary: >-
  IOP kernel modules and manager for MMCE hardware devices on PlayStation 2,
  enabling memory card switching and Game ID integration.
categories:
  - hardware
  - drivers
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: israpps/mmceman
  repositoryId: '922711275'
repository:
  archived: false
  defaultBranch: main
  stars: 1
  forks: 0
  lastCommit: '2025-02-22T13:53:02Z'
latestRelease:
  tag: popstarter
  name: MMCE Driver for POPStarter
  publishedAt: '2025-02-07T17:21:45Z'
  url: 'https://github.com/israpps/mmceman/releases/tag/popstarter'
activity:
  lastSynchronized: '2026-10-23T07:33:17.452Z'
automation:
  sync: true
  github:
    repoEtag: W/"6a7411f5e60c295e281103f2b07342bd5a5c4986478d5f6bdf153c168e78ec80"
    releasesEtag: W/"2a934d2a35cd5e389f709ae51ecf08c45790abb9854696e10a42cd647d015235"
discovery:
  method: 'fork-network:ps2-mmce/mmceman'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2-mmce/mmceman'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2-mmce/mmceman
  source: ps2-mmce/mmceman
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
