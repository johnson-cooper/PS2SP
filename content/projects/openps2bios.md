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
  stars: 282
  forks: 9
  lastCommit: '2026-11-05T23:00:58Z'
latestRelease:
  tag: v0.6
  name: OpenPS2BIOS 0.6
  publishedAt: '2026-11-05T23:01:14Z'
  url: 'https://github.com/TamaribaEmu/OpenPS2BIOS/releases/tag/v0.6'
activity:
  lastSynchronized: '2026-11-07T10:10:37.602Z'
automation:
  sync: true
  github:
    repoEtag: W/"c01e9c6852130ed7a1b641d85b044bf52cff8fe54ec83f606047863b9fc0e14f"
    releasesEtag: W/"bdf199b7a4e9cc98745d2ef7ecd59e9a1454418ba5fb88766bd584234b6c8e16"
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
