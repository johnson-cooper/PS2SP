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
  lastSynchronized: '2026-10-20T20:35:23.835Z'
automation:
  sync: true
  github:
    repoEtag: W/"73ddfa770820906f78bafafeacfb6bc8b61990d3ca443aa45c328d4bf98816b0"
    releasesEtag: '"94e354af2c4e28e3962b296e8975d0c6ec1a30b51f9be8608fe23fd98f6c999a"'
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
