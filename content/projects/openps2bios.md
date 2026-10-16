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
  stars: 0
  forks: 0
  lastCommit: '2026-10-16T16:12:28Z'
latestRelease:
  tag: v0.1
  name: OpenPS2BIOS 0.1
  publishedAt: '2026-10-16T16:07:14Z'
  url: 'https://github.com/TamaribaEmu/OpenPS2BIOS/releases/tag/v0.1'
activity:
  lastSynchronized: '2026-10-16T16:57:57.764Z'
automation:
  sync: true
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
