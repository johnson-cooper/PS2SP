---
name: malisx2-nexus
slug: malisx2-nexus-vitornovato007-create
summary: >-
  Vulkan driver for Arm Mali valhall v9 and v11 on the stock kbase kernel
  driver, built for the ARMSX2 PS2 emulator
categories:
  - drivers
  - emulators
tags:
  - auto-discovered
  - pending-promoted
  - prerelease-only
  - fork
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: vitornovato007-create/malisx2-nexus
  repositoryId: '1426674336'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-22T05:58:23Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-17T03:55:16.398Z'
automation:
  sync: true
  github:
    repoEtag: W/"c164f2b1c4693980b40959be76ead92792464401a6e624226da2ed56ed5456d5"
    releasesEtag: '"3f89c379fb58370027d6c5f33107efe5538d1fbb8aedbdc644262c86a3929b77"'
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: bmdhacks/malisx2'
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: bmdhacks/malisx2
  source: bmdhacks/malisx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
