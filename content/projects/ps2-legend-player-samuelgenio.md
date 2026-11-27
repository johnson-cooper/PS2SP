---
name: ps2-legend-player
slug: ps2-legend-player-samuelgenio
summary: >-
  PS2 Legend Player — fork GPL-3.0 do ARMSX2 (emulador de PS2 para Android,
  baseado no PCSX2), integrado ao app PS2 Legend.
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://armsx2.net/'
source:
  provider: github
  repository: samuelgenio/ps2-legend-player
  repositoryId: '1473817843'
repository:
  archived: false
  defaultBranch: ps2-legend
  stars: 0
  forks: 0
  lastCommit: '2026-11-27T00:45:30Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-27T04:32:55.319Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository name explicitly identifies PS2
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
