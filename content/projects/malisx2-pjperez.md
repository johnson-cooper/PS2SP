---
name: malisx2
slug: malisx2-pjperez
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
  repository: pjperez/malisx2
  repositoryId: '1441189314'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-11-16T19:30:55Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-26T15:17:53.704Z'
automation:
  sync: true
  github:
    repoEtag: W/"1811a8bfa6961976143ed841a9a693f510d6d873ef189902db6bf9c11f75bce6"
    releasesEtag: '"4a379f54e63716ee058ad0149b63163d56132c52d2eaa3a556019eed41a8343b"'
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
