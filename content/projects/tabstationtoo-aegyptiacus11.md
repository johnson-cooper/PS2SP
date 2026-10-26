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
  lastCommit: '2026-10-26T08:34:31Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-10-26T19:22:03.713Z'
automation:
  sync: true
  github:
    repoEtag: W/"8d22db83dec3d78ea76d15f27d38f5a6f92384e75c1b2c70064b337019e2a0e5"
    releasesEtag: '"38c3ccd7f65944b3f303bfcb7997b3c76200ccc2765c2dd0e0948d7774a01ca4"'
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
