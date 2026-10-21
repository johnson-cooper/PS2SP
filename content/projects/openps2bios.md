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
  stars: 238
  forks: 6
  lastCommit: '2026-10-21T02:49:50Z'
latestRelease:
  tag: v0.2
  name: OpenPS2BIOS 0.2
  publishedAt: '2026-10-17T16:43:50Z'
  url: 'https://github.com/TamaribaEmu/OpenPS2BIOS/releases/tag/v0.2'
activity:
  lastSynchronized: '2026-10-21T10:09:46.587Z'
automation:
  sync: true
  github:
    repoEtag: W/"5c32c7450fecc0efa5a4c4bed96945efed6464a5b873993ad0ffda627bd48440"
    releasesEtag: W/"5641be2eea130d6c9b4bdd174246e1217bfbc0ae57fd24cc01ad2a119fd353af"
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
