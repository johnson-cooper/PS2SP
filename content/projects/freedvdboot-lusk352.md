---
name: FreeDVDBoot
slug: freedvdboot-lusk352
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
  repository: lusk352/FreeDVDBoot
  repositoryId: '280016285'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-07-15T22:27:49Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-09T17:29:34.672Z'
automation:
  sync: true
  github:
    repoEtag: W/"1eb77fcf59f40e7b14415fbd98ef5057708c3c96c52ddeff8208c128ef254cfc"
    releasesEtag: '"1b07a5f20096cf9b5a1d413c9a9567ef7d1120a01238e1a61c91dfa57f6d8b7a"'
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
