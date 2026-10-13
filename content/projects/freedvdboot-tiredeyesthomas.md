---
name: FreeDVDBoot
slug: freedvdboot-tiredeyesthomas
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
  repository: TiredEyesThomas/FreeDVDBoot
  repositoryId: '448678874'
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
  lastSynchronized: '2026-10-13T07:42:42.824Z'
automation:
  sync: true
  github:
    repoEtag: W/"391c000e55c55956e5854ea6b8e3a53a0ad2f5cfcaa5e65dc3a9388ef586f42b"
    releasesEtag: '"8c07bad8e1c2ecd2ef35a081fceb234ce16794c9adbfbb34dc551b9fd5b3afea"'
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
