---
name: FreeDVDBoot
slug: freedvdboot-mxrachel
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
  repository: mxrachel/FreeDVDBoot
  repositoryId: '276019343'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2022-05-24T04:19:00Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-11T06:21:22.419Z'
automation:
  sync: true
  github:
    repoEtag: W/"9809f055e393cb3caaa6113d5ec3608dbed2b4ed6f5823ad1c8a3626dddf3454"
    releasesEtag: '"9c1d5d6c02bd03431bec9aa3b1b361ec1aa0f9e1da99d100fa686668ec8ecaad"'
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
