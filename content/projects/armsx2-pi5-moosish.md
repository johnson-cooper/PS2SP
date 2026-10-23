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
  lastSynchronized: '2026-10-23T22:11:26.443Z'
automation:
  sync: true
  github:
    repoEtag: W/"0bb5c4b6ea9a36037b958ed3cceadf3dcedbd68cdcc06fc92afd76860b1362fe"
    releasesEtag: W/"14dae464fa5fc0d0e1d23b42ec187d7f9f8a45f3b14856931feadc55cb613ac2"
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
