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
  lastSynchronized: '2026-11-22T03:16:08.322Z'
automation:
  sync: true
  github:
    repoEtag: W/"6dbaf8997d6315c43f94bf44d83fb2ed469a234ff03e8098bedafe5db2cf6ecd"
    releasesEtag: '"0343964b28fb2eda143511ab450b2bffb6215822f235192fb1be4cc3a8b0fb1f"'
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
