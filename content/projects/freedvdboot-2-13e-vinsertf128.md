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
  lastSynchronized: '2026-11-19T03:28:14.547Z'
automation:
  sync: true
  github:
    repoEtag: W/"8e3efab5f67829a51d475c2769ff817182c05bf289b693d22769420bede76a14"
    releasesEtag: W/"e40c28468d1f7822ce2d121d4d14939e4c7b8935c02a080cf38558c1ef379399"
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
