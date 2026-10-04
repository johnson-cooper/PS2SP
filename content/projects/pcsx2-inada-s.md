---
name: pcsx2
slug: pcsx2-inada-s
summary: PCSX2 - The Playstation 2 Emulator
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'http://pcsx2.net/'
source:
  provider: github
  repository: inada-s/pcsx2
  repositoryId: '249261147'
repository:
  archived: false
  defaultBranch: zdxsv-master
  stars: 1
  forks: 0
  lastCommit: '2026-10-04T22:16:45Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-04T22:32:01.981Z'
automation:
  sync: true
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 95
  evidence:
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---

Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
