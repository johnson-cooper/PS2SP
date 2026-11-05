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
  lastSynchronized: '2026-11-05T20:40:49.123Z'
automation:
  sync: true
  github:
    repoEtag: W/"e4848824ca1a14c4b35719e70d6636ca467ed66ce16ce68560413f8b962dcbf7"
    releasesEtag: '"8f1c17d50bc300b3e22fbe68aa0266425164eefaead82d37adcbbbb8c996a965"'
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
