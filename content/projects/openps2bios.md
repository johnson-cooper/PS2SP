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
  stars: 263
  forks: 8
  lastCommit: '2026-10-24T21:54:14Z'
latestRelease:
  tag: v0.4
  name: OpenPS2BIOS 0.4
  publishedAt: '2026-10-24T21:54:14Z'
  url: 'https://github.com/TamaribaEmu/OpenPS2BIOS/releases/tag/v0.4'
activity:
  lastSynchronized: '2026-10-27T10:35:46.821Z'
automation:
  sync: true
  github:
    repoEtag: W/"984f96c5d4aae4f6f3d51b1bf3fac20fad104ee07f98e224fe5d239e25bbd884"
    releasesEtag: W/"d04b908dbae64c8bec69fa8a17e05ffca4b64a9bf142f7eb8576fb8ffa96ebda"
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
