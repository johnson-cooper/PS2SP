---
name: FreeDVDBoot-OPL
slug: freedvdboot-opl-gorgylka
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
  repository: GorGylka/FreeDVDBoot-OPL
  repositoryId: '684645048'
repository:
  archived: false
  defaultBranch: master
  stars: 14
  forks: 0
  lastCommit: '2023-10-30T01:55:18Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-18T14:34:56.143Z'
automation:
  sync: true
  github:
    repoEtag: W/"dbcd042e0ca3b4be8b4c48252b754743d112e570e6c7a99fe2ea3715aac72c86"
    releasesEtag: '"c640920e4e9bca10914115fba992c8215e6aa10a4c5308ecfe128fe0d3464883"'
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
