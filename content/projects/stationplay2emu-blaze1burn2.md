---
name: Stationplay2EMU
slug: stationplay2emu-blaze1burn2
summary: 'PCSX2 - The Playstation 2 Emulator fork '
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
  repository: Blaze1burn2/Stationplay2EMU
  repositoryId: '1148753570'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2026-10-08T11:06:36Z'
latestRelease:
  tag: '1.0'
  name: 2-3-2026
  publishedAt: '2026-02-03T11:35:32Z'
  url: 'https://github.com/Blaze1burn2/Stationplay2EMU/releases/tag/1.0'
activity:
  lastSynchronized: '2026-10-09T16:14:20.983Z'
automation:
  sync: true
  github:
    repoEtag: W/"ad605025557240ab4bf0198562112932477c6ea38573694a0e7a3e29ae9156c7"
    releasesEtag: W/"68e790a454b935e9cd0d02080df0330013f9ce93a66b81f3d3633b24572a7c4e"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
