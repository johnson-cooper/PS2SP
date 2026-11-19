---
name: FreeDVDBoot
slug: freedvdboot-cod-segfault
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
  repository: CoD-Segfault/FreeDVDBoot
  repositoryId: '275670667'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-06-27T23:04:40Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-19T03:28:16.336Z'
automation:
  sync: true
  github:
    repoEtag: W/"ebe26be2ceccccbb9ddb67975193115f50c206cbdc00f318b4d24bd3ecc6a56d"
    releasesEtag: '"5439eddf41757a3450423ee500ca4e4ae360a247e876f1c1b434042b8a82a5b8"'
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
