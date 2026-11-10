---
name: PumpkinOS
slug: pumpkinos-andyvand
summary: PumpkinOS is a re-implementation of PalmOS.
categories:
  - ports
tags:
  - fork
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: andyvand/PumpkinOS
  repositoryId: '1134862011'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2026-11-09T23:20:32Z'
latestRelease:
  tag: '1.0'
  name: '1.0'
  publishedAt: '2026-02-02T16:18:52Z'
  url: 'https://github.com/andyvand/PumpkinOS/releases/tag/1.0'
activity:
  lastSynchronized: '2026-11-10T01:45:54.437Z'
automation:
  sync: true
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release metadata identifies PS2
    - GitHub fork of another repository
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: migueletto/PumpkinOS
  source: migueletto/PumpkinOS
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
