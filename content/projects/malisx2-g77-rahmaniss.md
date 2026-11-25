---
name: malisx2-G77
slug: malisx2-g77-rahmaniss
summary: >-
  Vulkan driver for Arm Mali v7, v9 and v11 on the stock kbase kernel driver,
  built for the ARMSX2 PS2 emulator
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
  repository: rahmaniss/malisx2-G77
  repositoryId: '1433274346'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-31T05:07:24Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-25T02:29:42.599Z'
automation:
  sync: true
  github:
    repoEtag: W/"9c9a738300e37b062d5d00a04d25cff3396f500e0e78a38b02d6c9ccca79866a"
    releasesEtag: '"ad1a1ec552bf400ecf3a617d2c9aa1202b8cfcc5dd53e2a67ba715368e1da051"'
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
