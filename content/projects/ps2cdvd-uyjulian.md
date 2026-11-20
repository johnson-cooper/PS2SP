---
name: ps2cdvd
slug: ps2cdvd-uyjulian
summary: >-
  A reverse-engineering of rom0:CDVDMAN from PS2 BIOS. This project differs in
  that the ISO9660 stuff is in a separate IRX(isofs) than the rest of the CDVD
  stuff(cdvddrvr). This was written long ago by Pixel and I.  It needs some TLC.
categories:
  - preservation
  - drivers
  - development
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: uyjulian/ps2cdvd
  repositoryId: '663340121'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2023-07-07T14:48:07Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-20T03:17:13.652Z'
automation:
  sync: true
  github:
    repoEtag: W/"9bfd5d60351db2644a5f1359b6331634802943b635d51f3a8a7a015c068a96dc"
    releasesEtag: '"04ae66d0652f8e32f85ee09b36048410b2b52f52a85660eea8f274a40dd5e3c9"'
discovery:
  method: 'fork-network:asmblur/ps2cdvd'
  confidence: 95
  evidence:
    - repository description explicitly identifies PS2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: asmblur/ps2cdvd'
  maturity: dormant-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: asmblur/ps2cdvd
  source: asmblur/ps2cdvd
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
