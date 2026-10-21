---
name: TabStationToo
slug: tabstationtoo-aegyptiacus11
summary: >-
  PlayStation 2 emulation in the browser: PCSX2 compiled to WebAssembly. Bring
  your own BIOS; nothing is uploaded. Not affiliated with Sony or the PCSX2
  project.
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://tabstationtoo.github.io/TabStationToo/'
source:
  provider: github
  repository: TabStationToo/TabStationToo
  repositoryId: '1421949936'
repository:
  archived: false
  defaultBranch: wasm
  stars: 1
  forks: 0
  lastCommit: '2026-10-21T14:44:26Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-21T19:21:16.645Z'
automation:
  sync: true
  github:
    repoEtag: W/"c4fdcd2d9130a2c17651daffa4f216c577f910b8604489223f42b287fc2e09d1"
    releasesEtag: '"4c931b40b872dc6bf0b1ac9708452c01e314f3374c26fa0dbd2bd31ee8a7dcb7"'
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: PCSX2/pcsx2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
