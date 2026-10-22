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
  stars: 246
  forks: 6
  lastCommit: '2026-10-22T00:55:35Z'
latestRelease:
  tag: v0.3
  name: OpenPS2BIOS 0.3
  publishedAt: '2026-10-21T13:49:34Z'
  url: 'https://github.com/TamaribaEmu/OpenPS2BIOS/releases/tag/v0.3'
activity:
  lastSynchronized: '2026-10-22T10:12:09.123Z'
automation:
  sync: true
  github:
    repoEtag: W/"7b8dd967d97fc0405da0af9bc00dda0d09e781a718a164c962a17bbb2796f8ec"
    releasesEtag: W/"58afcf5aff5c47f91ab99bb526a71e275a2d3e57504669ad50fe1657442c9196"
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
