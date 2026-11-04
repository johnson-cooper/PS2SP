---
name: FreeDVDBoot
slug: freedvdboot-jmpfbmx
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
  repository: jmpfbmx/FreeDVDBoot
  repositoryId: '275784927'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 0
  lastCommit: '2020-06-29T01:39:59Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-04T22:40:17.087Z'
automation:
  sync: true
  github:
    repoEtag: W/"908f2d5c96e8c5ed98de5c146321d34a486a793774f87ed6ad0ac21148e74eb0"
    releasesEtag: '"a4f168140a88f481cd5e05a9c06458170dc17a22c9e05abef5ff2db1765104a0"'
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
