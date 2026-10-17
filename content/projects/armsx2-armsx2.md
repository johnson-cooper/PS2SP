---
name: ARMSX2
slug: armsx2-armsx2
summary: ARMSX2 - The Playstation 2 Emulator for ARM64 Platforms
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
  repository: ARMSX2/ARMSX2
  repositoryId: '1036246172'
repository:
  archived: false
  defaultBranch: master
  stars: 2198
  forks: 176
  lastCommit: '2026-10-17T14:16:44Z'
latestRelease:
  tag: 2.8.4
  name: 'ARMSX2 2.8.4 '
  publishedAt: '2026-10-17T14:16:45Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/2.8.4'
activity:
  lastSynchronized: '2026-10-17T19:24:23.058Z'
automation:
  sync: true
  github:
    repoEtag: W/"d14b047c8e5dd9b13e1d8e87e9dc57aa966eb48f24825f49fe2a99b046ac413c"
    releasesEtag: W/"43f48e3f390345d4e620b2a3fdf62dcb324416234194c48218ac23502cd1c1a7"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: released-active
verified: false
featured: false
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
