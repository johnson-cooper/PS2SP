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
  lastSynchronized: '2026-11-13T22:37:57.957Z'
automation:
  sync: true
  github:
    repoEtag: W/"407a6f8c7410196e89374e737cebd34b992ca19436445547f3d7b9785ed68444"
    releasesEtag: W/"c16e8e4cec1f493d1c8414bf666e8846d68a0f565d473bf2a26368d436e63e2a"
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
