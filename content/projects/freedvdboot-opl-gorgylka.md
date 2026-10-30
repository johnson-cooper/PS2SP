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
  lastSynchronized: '2026-10-30T14:09:08.405Z'
automation:
  sync: true
  github:
    repoEtag: W/"c74115f672bf840830bd6f6d6421d53e9ed9515e52329c64f81b87aa98ca5389"
    releasesEtag: '"000355bbf274101e0048ce4960e43564dcb66510c0b66a35418a5215ce1cc384"'
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
