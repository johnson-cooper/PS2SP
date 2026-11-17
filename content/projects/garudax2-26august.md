---
name: GarudaX2
slug: garudax2-26august
summary: >-
  GarudaX2 - PlayStation 2 emulator for Android (ARM64). Community fork of
  ARMSX2/PCSX2. Not affiliated with Sony, PCSX2, or ARMSX2.
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
  repository: 26August/GarudaX2
  repositoryId: '1421005821'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2026-10-20T13:08:51Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-17T13:26:58.028Z'
automation:
  sync: true
  github:
    repoEtag: W/"cd6343ac58bfb4679747c57ee9191fabb91efc0bd4760bc4e4c8fc0a4a73bbb0"
    releasesEtag: '"a3f289ff4b9de0de548252c38e0c583574e046acd86a3fa9ee49ea46fb04353b"'
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
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
