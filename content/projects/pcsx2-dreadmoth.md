---
name: pcsx2
slug: pcsx2-dreadmoth
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
  repository: Dreadmoth/pcsx2
  repositoryId: '278090783'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-11T00:54:03Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-25T01:14:52.126Z'
automation:
  sync: true
  github:
    repoEtag: W/"6a81a36698283fd9f77ab995aad2366502418e3546b61f4784b5668e92f1a196"
    releasesEtag: '"a5c451af9d88eff769190129023bb74c9de83ceb2f12875d0ca286055e5e73e6"'
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
