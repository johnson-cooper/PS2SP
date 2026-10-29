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
  lastSynchronized: '2026-10-29T14:20:34.435Z'
automation:
  sync: true
  github:
    repoEtag: W/"674c4ea27e6539b6fa0514486c30edc38adacad058a1dcbc7e2ef85b71cdf450"
    releasesEtag: '"54b3450c7eeceffdfd9637e5dbd9ebf7bcfc8e4ceba373ac5374c014cb3cffab"'
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
