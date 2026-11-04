---
name: ARMSX2-PI5
slug: armsx2-pi5-moosish
summary: ARMSX2 fork for enhanced PI 5 performance
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
  repository: Moosish/ARMSX2-PI5
  repositoryId: '1392869892'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-09-28T19:29:01Z'
latestRelease:
  tag: pi5-builds
  name: Raspberry Pi 5 builds
  publishedAt: '2026-09-28T17:50:05Z'
  url: 'https://github.com/Moosish/ARMSX2-PI5/releases/tag/pi5-builds'
activity:
  lastSynchronized: '2026-11-04T22:39:52.686Z'
automation:
  sync: true
  github:
    repoEtag: W/"6279df7f2417840019646251137fa9e9272883014f2c97ac135b38b61e967cb7"
    releasesEtag: W/"eb59d9cb38837eccedf5d4d85f8872ab4046308a2d8ab8e3e80171241775870f"
discovery:
  method: 'fork-network:ARMSX2/ARMSX2'
  confidence: 95
  evidence:
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: ARMSX2/ARMSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
