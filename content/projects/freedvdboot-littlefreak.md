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
  lastSynchronized: '2026-10-11T20:17:29.017Z'
automation:
  sync: true
  github:
    repoEtag: W/"8c67bad3bd71ed387d4df342c6ae18a2592fd06249c6f210db93506bc93415c8"
    releasesEtag: '"0a3849be1621f00a1da30ee0c8d9c01d942d49f8adf5b017c81f1dc911d1518f"'
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
