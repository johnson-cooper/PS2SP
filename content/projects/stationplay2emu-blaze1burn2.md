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
  lastCommit: '2026-10-19T17:28:48Z'
latestRelease:
  tag: '1.0'
  name: 2-3-2026
  publishedAt: '2026-02-03T11:35:32Z'
  url: 'https://github.com/Blaze1burn2/Stationplay2EMU/releases/tag/1.0'
activity:
  lastSynchronized: '2026-10-28T16:05:47.137Z'
automation:
  sync: true
  github:
    repoEtag: W/"34c69d88bc31065ab0330c2a3fa0b12ac78bf78ed4d6e41122ef916164b477e8"
    releasesEtag: W/"c283487eae602652f0ecd5fa80c21a521a845c4ca206ddd87c5ff49d083c9fe0"
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
