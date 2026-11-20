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
  lastSynchronized: '2026-11-20T11:50:03.724Z'
automation:
  sync: true
  github:
    repoEtag: W/"09ff7f3feab6477d0fa558e68ee31d5e221660f3944ecec0aebc6cda61338684"
    releasesEtag: '"a908ec342d9a023473918e50a86083a4ebc47b646bcf8ffdf1812bac058b42ed"'
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
