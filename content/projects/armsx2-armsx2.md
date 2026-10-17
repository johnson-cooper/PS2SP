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
  forks: 175
  lastCommit: '2026-10-16T19:36:37Z'
latestRelease:
  tag: 2.8.3
  name: 'ARMSX2 2.8.3 '
  publishedAt: '2026-10-11T17:16:38Z'
  url: 'https://github.com/ARMSX2/ARMSX2/releases/tag/2.8.3'
activity:
  lastSynchronized: '2026-10-17T05:49:47.154Z'
automation:
  sync: true
  github:
    repoEtag: W/"fb406954490fc39b47009d74d0a89adaf03d1199943564650009070726e25bc8"
    releasesEtag: W/"53cee7e7dcbdc533a54d9bc60249cafade7665b9b377fe6e9cebb4082eb0401b"
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
