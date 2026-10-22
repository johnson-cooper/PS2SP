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
  lastSynchronized: '2026-10-22T15:19:31.578Z'
automation:
  sync: true
  github:
    repoEtag: W/"d19533ff1a065b67f5c8027ca38a4ca89306da53e59b2bdac019bc166b9a6acd"
    releasesEtag: W/"147c09eebc49508ac0d6a0db9283e5666b8c6882311a1770d699f765ae2bd702"
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
