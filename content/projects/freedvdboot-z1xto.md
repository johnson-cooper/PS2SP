---
name: FreeDVDBoot
slug: freedvdboot-z1xto
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
  repository: z1xto/FreeDVDBoot
  repositoryId: '308088084'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2020-09-06T18:11:19Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-09T06:28:55.711Z'
automation:
  sync: true
  github:
    repoEtag: W/"8277ff209f264b05f912b37f8348f49504989432e17f1136c091a41371279dca"
    releasesEtag: '"2fe2afac4e4c51d345b0b3b79c7fb7f05cfb2cad022de484e373ed5d4899b781"'
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
