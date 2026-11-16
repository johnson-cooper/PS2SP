---
name: malisx2
slug: malisx2-beebono
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
  repository: beebono/malisx2
  repositoryId: '1428711153'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-21T21:54:35Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-16T20:30:05.663Z'
automation:
  sync: true
  github:
    repoEtag: W/"55dfb6e2c336af1c07a8e81df1abd4843b8e828d99974e5e5bf954635fdcdfb7"
    releasesEtag: '"749f39855c08ba9933e4898e15871fa55ad80de7611f568a99148006af259a54"'
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
