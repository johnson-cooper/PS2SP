---
name: FreeDVDBoot
slug: freedvdboot-eligrey
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
  repository: eligrey/FreeDVDBoot
  repositoryId: '275925638'
repository:
  archived: false
  defaultBranch: master
  stars: 2
  forks: 0
  lastCommit: '2020-06-29T18:34:44Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-11T06:21:21.945Z'
automation:
  sync: true
  github:
    repoEtag: W/"9664e6d9cfdbe52654e770f223eeac2af81f6ad90809ff6949e134a03104b0a6"
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
