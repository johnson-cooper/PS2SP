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
  stars: 76
  forks: 4
  lastCommit: '2026-10-30T09:51:35Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-30T19:24:42.149Z'
automation:
  sync: true
  github:
    repoEtag: W/"9a0eb9ae22a269e71dd05ee7e782f3fb6c34b13b7244a042e4115a862332896b"
    releasesEtag: '"4e5a0754123e150edd35f63c077b092fc8acf1f99673343fdbd321eefe2fd689"'
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
