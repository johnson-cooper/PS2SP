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
  lastSynchronized: '2026-11-17T03:54:51.410Z'
automation:
  sync: true
  github:
    repoEtag: W/"b074cb2c5fa98665567990f96952fe31a0a41341230da34d48c9e21e412ed50b"
    releasesEtag: W/"3d57eee4a024a39bd6bda764cd9642c9e9d68fd1950f40779458fac1c3bff150"
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
