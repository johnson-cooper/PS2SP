---
name: FreeDVDBoot
slug: freedvdboot-kmil21
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
  repository: kmil21/FreeDVDBoot
  repositoryId: '345185435'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2021-02-10T08:51:55Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-08T21:20:48.947Z'
automation:
  sync: true
  github:
    repoEtag: W/"5d55c769eaa2c8f729558c7030ff463dc3c9ab0989f59561d047da97300ec0c5"
    releasesEtag: '"9d58babb9c0ebce4843e7fb6d1a98d7c2a114a7ab5d177718e3a0fa6f173a756"'
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
