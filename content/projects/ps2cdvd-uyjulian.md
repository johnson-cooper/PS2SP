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
  lastSynchronized: '2026-11-05T03:31:25.707Z'
automation:
  sync: true
  github:
    repoEtag: W/"8e76cd599dbc84132e64f6780cae08199a32b735e024b1755d809f243af7489e"
    releasesEtag: '"d0fd33205f72e666ae36b3d0b58a9c1bc940fa028f6d4d3236e413053a4ae128"'
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
