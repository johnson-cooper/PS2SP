---
name: pcsx2
slug: pcsx2-retrorepair
summary: PCSX2 - The Playstation 2 Emulator (GroovyNLC)
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
  repository: retrorepair/pcsx2
  repositoryId: '1403685418'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-10-13T16:11:25Z'
latestRelease:
  tag: v2026.10.13
  name: PCSX2 GroovyNLC v2026.10.13
  publishedAt: '2026-10-13T16:11:26Z'
  url: 'https://github.com/retrorepair/pcsx2/releases/tag/v2026.10.13'
activity:
  lastSynchronized: '2026-10-21T23:20:34.293Z'
automation:
  sync: true
  github:
    repoEtag: W/"8b8e014c69b08f666d5692c67e1bcdbb958a165071c2ca1e5d43d45ef0963bfc"
    releasesEtag: W/"4ebf4a94cd99cc5cbe0a74fa9c044e69a945220d4bdb7ac9c59f0c4414a7884e"
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
  forkOf: verbst/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
