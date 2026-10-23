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
  lastSynchronized: '2026-10-23T13:27:24.239Z'
automation:
  sync: true
  github:
    repoEtag: W/"0af7838530c6928bddbde47e78c6d1813c5a3e6e9a9edd5e6082088f4c1d75a4"
    releasesEtag: '"1f955df3cc0d5f50148d51c27f9f25e070d80480a00c6dcdbc2b3f8472658634"'
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
