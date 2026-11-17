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
  lastSynchronized: '2026-11-17T03:56:20.677Z'
automation:
  sync: true
  github:
    repoEtag: W/"3dc77b3b156b9d5c89967fa88290ad600349ebdd7b162d602817b4955fb01fb2"
    releasesEtag: '"3f89c379fb58370027d6c5f33107efe5538d1fbb8aedbdc644262c86a3929b77"'
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
