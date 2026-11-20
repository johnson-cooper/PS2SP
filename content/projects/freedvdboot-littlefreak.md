---
name: FreeDVDBoot
slug: freedvdboot-littlefreak
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
  repository: LittleFreak/FreeDVDBoot
  repositoryId: '276289474'
repository:
  archived: true
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2024-01-12T01:15:17Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-20T20:19:59.485Z'
automation:
  sync: true
  github:
    repoEtag: W/"10215b4da908bdddb69fe20e432306614aa7a4ef6da9fe4473238a2577066314"
    releasesEtag: '"f2bc2d03e7a08ccfa28f077e7aa68a03aa4d9440a837b8c34d76f4505f5cf9e8"'
discovery:
  method: 'fork-network:CTurt/FreeDVDBoot'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: CTurt/FreeDVDBoot'
  maturity: archived
verified: false
featured: false
hidden: false
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
