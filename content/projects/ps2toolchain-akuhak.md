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
  lastSynchronized: '2026-10-21T15:16:16.455Z'
automation:
  sync: true
  github:
    repoEtag: W/"a082c75ad5f648efbbf8602537e1768f3eb26fc3a751a0b4d4589256fc8139e6"
    releasesEtag: W/"928c6fdbd498a10adf0ded9e825839a8818e31b7f2822cae686ac900864f76e0"
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
