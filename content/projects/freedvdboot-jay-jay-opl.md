---
name: FreeDVDBoot
slug: freedvdboot-jay-jay-opl
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
  repository: Jay-Jay-OPL/FreeDVDBoot
  repositoryId: '275971557'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2020-09-08T23:56:50Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-11T15:41:36.533Z'
automation:
  sync: true
  github:
    repoEtag: W/"a599b47c25dc29cd53db036d604b80f8a4010623a83691107bb92f0e931256df"
    releasesEtag: '"e33f1da332981b44846cc1f360ff0a2111ac9a73aecbbdd36de7fa8f4a740af7"'
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
