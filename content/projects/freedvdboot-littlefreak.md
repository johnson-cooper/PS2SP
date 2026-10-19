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
  lastSynchronized: '2026-10-19T20:36:01.775Z'
automation:
  sync: true
  github:
    repoEtag: W/"1d01b102324acbb591e7fc5d69d6afb754be99bac30c25b61ddd41accf7fcb5b"
    releasesEtag: '"64f156aabf0ae02803a91cefa059b7f1830a54e71b68920d5f40af226e5341e2"'
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
