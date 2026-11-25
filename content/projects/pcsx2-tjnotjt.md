---
name: pcsx2
slug: pcsx2-tjnotjt
summary: PCSX2 - The Playstation 2 Emulator
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://pcsx2.net'
source:
  provider: github
  repository: TJnotJT/pcsx2
  repositoryId: '909052246'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2026-11-23T23:52:04Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-25T02:30:35.375Z'
automation:
  sync: true
  github:
    repoEtag: W/"37c396ca88ff0f7807969e726a76d1cb00bfad6ba59822d0f3b5ae5e0e803701"
    releasesEtag: '"ad1a1ec552bf400ecf3a617d2c9aa1202b8cfcc5dd53e2a67ba715368e1da051"'
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
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
