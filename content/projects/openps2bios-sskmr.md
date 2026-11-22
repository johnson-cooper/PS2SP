---
name: OpenPS2BIOS
slug: openps2bios-sskmr
summary: >-
  Experimental open-source replacement PlayStation 2 BIOS for emulators. MIT
  licensed.
categories:
  - utilities
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: sskmr/OpenPS2BIOS
  repositoryId: '1424422366'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-18T11:15:40Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-22T11:33:17.465Z'
automation:
  sync: true
  github:
    repoEtag: W/"388c5ecf6eabc06183e6bba81ab5580578e6bd50aae13f64b7ce382e5cdaeacc"
    releasesEtag: '"b9425337d6a4d0a060d320bb652f68751ea6401e7f16b64e1b6c57830abfcf54"'
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: TamaribaEmu/OpenPS2BIOS'
  maturity: active-wip
verified: false
featured: false
hidden: false
relationships:
  forkOf: TamaribaEmu/OpenPS2BIOS
  source: TamaribaEmu/OpenPS2BIOS
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
