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
  lastSynchronized: '2026-10-20T23:54:19.696Z'
automation:
  sync: true
  github:
    repoEtag: W/"b8d33b10b7cab8e8f1c7c63c831dfdbac0aea50d17e344242a5b9e8110a496cc"
    releasesEtag: W/"0064de21ec5e968e6375afb173929e9cb1c86a3f8d7bdb47bdb1bd4d6ae06949"
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
