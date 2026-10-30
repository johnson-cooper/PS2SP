---
name: FreeDVDBoot
slug: freedvdboot-littlebalup
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
  repository: littlebalup/FreeDVDBoot
  repositoryId: '477300498'
repository:
  archived: false
  defaultBranch: master
  stars: 3
  forks: 0
  lastCommit: '2022-02-02T08:15:09Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-30T23:47:21.943Z'
automation:
  sync: true
  github:
    repoEtag: W/"a055cf8755d440f5913b776b24e239d2fb87c2b39063945bbb1acbd019f0e559"
    releasesEtag: '"cbffa8c2ee1a1f6b3cf75e78213d91cd233adb139b0afa116aa74a77efb70eb9"'
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
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
