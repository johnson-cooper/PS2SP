---
name: FreeDVDBoot
slug: freedvdboot-cynthiaswill
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
  repository: cynthiaswill/FreeDVDBoot
  repositoryId: '601752784'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2022-02-02T08:15:09Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-17T09:21:49.474Z'
automation:
  sync: true
  github:
    repoEtag: W/"fbb1e4dd5c60ce59043e203096cfbfe75f9bea543e2bb254649e27f11ed772d0"
    releasesEtag: '"cb769862e6712dfca548a1257f650e38e02b0d2a247f9ff368b7efe75bd7ead2"'
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
relationships:
  forkOf: CTurt/FreeDVDBoot
  source: CTurt/FreeDVDBoot
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
