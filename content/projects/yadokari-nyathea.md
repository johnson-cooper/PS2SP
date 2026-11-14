---
name: Yadokari
slug: yadokari-nyathea
summary: Nintendo Switch 2 Port of ARMSX2
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
  repository: nyathea/Yadokari
  repositoryId: '1457445040'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-14T06:23:40Z'
latestRelease:
  tag: v1
  name: v1
  publishedAt: '2026-11-14T06:21:30Z'
  url: 'https://github.com/nyathea/Yadokari/releases/tag/v1'
activity:
  lastSynchronized: '2026-11-14T07:02:10.381Z'
automation:
  sync: true
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: PalindromicBreadLoaf/Yadokari
  source: PCSX2/pcsx2
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
