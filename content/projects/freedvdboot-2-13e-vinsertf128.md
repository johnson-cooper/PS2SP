---
name: FreeDVDBoot-2.13E
slug: freedvdboot-2-13e-vinsertf128
summary: PlayStation 2 DVD Player Exploit for DVD Reader version 2.13E
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
  repository: VINSERTF128/FreeDVDBoot-2.13E
  repositoryId: '1232980511'
repository:
  archived: false
  defaultBranch: master
  stars: 11
  forks: 0
  lastCommit: '2026-09-07T18:26:06Z'
latestRelease:
  tag: '1.1'
  name: 'Updated ISO '
  publishedAt: '2026-09-07T18:26:06Z'
  url: 'https://github.com/VINSERTF128/FreeDVDBoot-2.13E/releases/tag/1.1'
activity:
  lastSynchronized: '2026-11-22T03:15:42.964Z'
automation:
  sync: true
  github:
    repoEtag: W/"afb880ab924f2c9f27be45b7327988334843bd7dd7eb28a329a0630166ec1ba6"
    releasesEtag: W/"7da8665c2f41cb3d15f48a74b6dc9bf43f2a0a705f39876f554305446ae9fefb"
discovery:
  method: 'fork-network:CTurt/FreeDVDBoot'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CTurt/FreeDVDBoot'
  maturity: released-active
verified: false
featured: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
