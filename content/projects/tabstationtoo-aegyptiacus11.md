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
  stars: 161
  forks: 17
  lastCommit: '2026-10-30T09:51:35Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-08T19:44:30.822Z'
automation:
  sync: true
  github:
    repoEtag: W/"ac2c5edc8dcdd711696a20521ca06de4f05a135229362b175ea415a267dff29f"
    releasesEtag: '"2d77d78d9406dfdb04f6cdb831785e70ead0264c82109729acd315cd0faa00fd"'
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
