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
  stars: 2
  forks: 0
  lastCommit: '2026-11-17T10:43:37Z'
latestRelease:
  tag: zdxsv-1.0.4
  name: zdxsv-1.0.4
  publishedAt: '2026-11-17T10:43:37Z'
  url: 'https://github.com/inada-s/pcsx2/releases/tag/zdxsv-1.0.4'
activity:
  lastSynchronized: '2026-11-17T13:27:53.115Z'
automation:
  sync: true
  github:
    repoEtag: W/"58e3e84b5fa06666657c36ba86e872247688d3a0f651c01bb6fa5c79ff58533b"
    releasesEtag: W/"3ed59ee5345ba322ba5c52a5261319f4bc5063b241e3c51b6b02657b763649b2"
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
