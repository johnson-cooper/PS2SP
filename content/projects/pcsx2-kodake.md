---
name: pcsx2
slug: pcsx2-kodake
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
  repository: Kodake/pcsx2
  repositoryId: '1415066836'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-12T00:34:13Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-01T19:41:26.657Z'
automation:
  sync: true
  github:
    repoEtag: W/"e23d7c02edddf5233ae3d84a2495275cf21de18ddf1b191f5bd94282671c9488"
    releasesEtag: '"77fced59e78595972d5ad73c99bf78e1bf7c3083a50bba7fc056d047e954f91c"'
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
