---
name: romm-armada
slug: romm-armada
summary: >-
  Decky Loader plugin for Arm64 handhelds: download RomM games and sync PS2
  saves, with the experiments behind it
categories:
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: abduznik/romm-armada
  repositoryId: '1433520951'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-27T18:53:08Z'
latestRelease:
  tag: v0.4.0
  name: RomM Armada 0.4.0
  publishedAt: '2026-10-27T18:53:08Z'
  url: 'https://github.com/abduznik/romm-armada/releases/tag/v0.4.0'
activity:
  lastSynchronized: '2026-10-29T00:59:08.101Z'
automation:
  sync: true
  github:
    repoEtag: W/"7103853873e18fb639f372f57ac2f9f7aa27fe1e5694f465b65b53ceab5144f4"
    releasesEtag: W/"c4526a3a2cef1b4e606793189e3a199ce483e71df358a2f302b5565806e2d819"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
