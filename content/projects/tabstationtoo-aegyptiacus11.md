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
  stars: 2
  forks: 0
  lastCommit: '2026-10-25T19:08:07Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-25T19:39:22.805Z'
automation:
  sync: true
  github:
    repoEtag: W/"9732dbf3a7dc74a986558f2c37756e41e07c7ee95c677d62044cf291fe8bf6fc"
    releasesEtag: '"17828022ef91e6b899139ea659c43195f157e5fe9fda163fe4cfd658085b1033"'
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
