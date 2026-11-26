---
name: NJEMU-Libretro
slug: njemu-libretro-honkeykong
summary: CPS1 CPS2 NEOGEO(CD) Libretro Core
categories:
  - emulators
tags:
  - fork
  - auto-discovered
features: []
authors: []
license: GPL-3.0
homepage: null
source:
  provider: github
  repository: HonkeyKong/NJEMU-Libretro
  repositoryId: '1437024425'
repository:
  archived: false
  defaultBranch: cps2_improvements
  stars: 0
  forks: 0
  lastCommit: '2026-11-10T03:18:33Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-26T05:05:15.784Z'
automation:
  sync: true
  github:
    repoEtag: W/"aaf63a0e7515ad0e3cf5990dc9b83dd9bee080709ce92821ee1863eadda2a850"
    releasesEtag: '"7807fc945c82a55a373917423d07bcc65bba2c22ba0a38e4906861cea414cdb8"'
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: phoe-nix/NJEMU'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: SumavisionQ5/NJEMU-PS2
  source: phoe-nix/NJEMU
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
