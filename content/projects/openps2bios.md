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
  stars: 291
  forks: 8
  lastCommit: '2026-11-09T02:47:11Z'
latestRelease:
  tag: v0.6
  name: OpenPS2BIOS 0.6
  publishedAt: '2026-11-05T23:01:14Z'
  url: 'https://github.com/TamaribaEmu/OpenPS2BIOS/releases/tag/v0.6'
activity:
  lastSynchronized: '2026-11-14T10:35:32.835Z'
automation:
  sync: true
  github:
    repoEtag: W/"e300a75f9fba861b7a45ee65390bf553c9c6f0760ce399599624cc9677c208c2"
    releasesEtag: W/"1c654831e87f22754997cdf9d4ba27c40ddb26d56163fb577a88bf5f449c04e1"
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
