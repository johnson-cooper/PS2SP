---
name: FreeDVDBoot
slug: freedvdboot-moresandeep
summary: PlayStation 2 DVD Player Exploit
categories:
  - boot-tools
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: moresandeep/FreeDVDBoot
  repositoryId: '276102407'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-06-30T11:31:41Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-07T14:33:58.444Z'
automation:
  sync: true
  github:
    repoEtag: W/"261fab7f2c00869e5ac53b00c9ad28ffc1025a054f2bd7544aa5c36b13125b67"
    releasesEtag: '"a8b72fc23874e1701b2920e2e37cd2ca4913fb4b114fa3cba3efba72e700fa11"'
discovery:
  method: 'fork-network:CTurt/FreeDVDBoot'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CTurt/FreeDVDBoot'
  maturity: dormant-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
