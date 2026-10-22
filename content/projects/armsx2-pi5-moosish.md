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
  lastSynchronized: '2026-10-22T22:23:30.195Z'
automation:
  sync: true
  github:
    repoEtag: W/"048f8eb6039f6e89669670eab3ecbe8379d9736e43a1c7966c53b09c13eb11bd"
    releasesEtag: W/"07a98de792729dbb568ce8e7afa03200d44c64fbc04583c2f11d2fb688c2dc58"
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
