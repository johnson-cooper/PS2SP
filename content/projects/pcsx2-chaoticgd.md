---
name: pcsx2
slug: pcsx2-chaoticgd
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
  repository: chaoticgd/pcsx2
  repositoryId: '186703791'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2026-10-16T18:38:32Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-24T05:55:06.214Z'
automation:
  sync: true
  github:
    repoEtag: W/"4cddef4708d30672edbb4fdca3a4a778be478793cf69b54cf9ef0f04f546ecec"
    releasesEtag: '"6651f0a326fe50ee327dca388d5c531714ef939da31569d651d528b162d31cc1"'
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
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
