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
  lastSynchronized: '2026-11-26T15:19:43.519Z'
automation:
  sync: true
  github:
    repoEtag: W/"b48764b2c6aa6a31bb625b12b5aa23c45d1cf88034627f6e6138da77b08e974d"
    releasesEtag: W/"61d29a339e43d6288475dc1ceaf82c625f0d864fc4f30fa00c18f5440bd5e96e"
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
