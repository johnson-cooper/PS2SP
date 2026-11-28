---
name: OpenPS2BIOS
slug: openps2bios
summary: >-
  Experimental open-source replacement PlayStation 2 BIOS for emulators. MIT
  licensed, no Sony firmware.
categories:
  - utilities
tags:
  - auto-discovered
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: TamaribaEmu/OpenPS2BIOS
  repositoryId: '1422380564'
repository:
  archived: false
  defaultBranch: main
  stars: 301
  forks: 9
  lastCommit: '2026-11-22T19:42:22Z'
latestRelease:
  tag: v0.7
  name: OpenPS2BIOS 0.7
  publishedAt: '2026-11-22T19:42:22Z'
  url: 'https://github.com/TamaribaEmu/OpenPS2BIOS/releases/tag/v0.7'
activity:
  lastSynchronized: '2026-11-28T10:29:04.830Z'
automation:
  sync: true
  github:
    repoEtag: W/"6147b43b29a1d9a4297a0c3275dc590c481d4d464fe6eabec7eb053fb472896c"
    releasesEtag: W/"e11ed1465c1ecd5364d2035dbb263ad3f25b83e21cf97c58f4761768a6c51155"
discovery:
  method: 'incremental:ps2sdk in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
  maturity: released-active
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
