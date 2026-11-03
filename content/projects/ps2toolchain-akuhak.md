---
name: ps2toolchain
slug: ps2toolchain-akuhak
summary: >-
  The PS2 toolchain scripts automatically build and install compilers and
  binutils that can be used to create homebrew software for the PS2 console.
categories:
  - sdks
  - development
tags:
  - compiler
  - toolchain
  - ps2dev
  - fork
  - auto-discovered
features: []
authors: []
license: BSD-2-Clause
homepage: null
source:
  provider: github
  repository: AKuHAK/ps2toolchain
  repositoryId: '81427596'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2023-05-24T08:19:09Z'
latestRelease:
  tag: test
  name: null
  publishedAt: '2017-08-25T12:11:06Z'
  url: 'https://github.com/AKuHAK/ps2toolchain/releases/tag/test'
activity:
  lastSynchronized: '2026-11-03T15:10:29.450Z'
automation:
  sync: true
  github:
    repoEtag: W/"41d3531702821fd99e2fc0975f6d37cd2a399cd2a742972f7e6cf25ef59b86fd"
    releasesEtag: W/"5f32ce8db6d6c280adc68120c5f3e9d67272ca21e78be7b7fa790650247928d8"
discovery:
  method: 'fork-network:ps2dev/ps2toolchain'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2toolchain'
  maturity: released-legacy
verified: false
featured: false
hidden: false
relationships:
  forkOf: ps2dev/ps2toolchain
  source: ps2dev/ps2toolchain
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
