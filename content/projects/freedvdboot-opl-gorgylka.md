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
  lastSynchronized: '2026-10-19T14:41:16.987Z'
automation:
  sync: true
  github:
    repoEtag: W/"8dd4289f6dbd9707cb07d3e709d6dd38780ff8d2ed07706c0dd677120040971d"
    releasesEtag: '"1474211309c9dbcbb93bb9a0d25d66c80bd12d58effff574e673d3f6cebe58ae"'
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
