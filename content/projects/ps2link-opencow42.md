---
name: ps2link
slug: ps2link-opencow42
summary: >-
  PlayStation 2 network bootloader that executes ELF binaries sent over TCP/IP
  from host development tools like ps2client.
categories:
  - networking
  - development
tags:
  - debugging
  - network
  - elf
  - fork
  - auto-discovered
features:
  - network
authors: []
license: null
homepage: null
source:
  provider: github
  repository: OpenCow42/ps2link
  repositoryId: '1315458878'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-08-01T19:18:40Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-01T15:10:57.420Z'
automation:
  sync: true
  github:
    repoEtag: W/"77bd7213808b1b70003fcd36dd4423e495dbb2da86cb99335693ae090947a828"
    releasesEtag: '"ad77fe11f72b65d0026fedb2545459954fd125a98ebe703c07954f3273e8f4aa"'
discovery:
  method: 'fork-network:ps2dev/ps2link'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2link'
  maturity: active-unreleased
verified: false
featured: false
relationships:
  forkOf: ps2dev/ps2link
  source: ps2dev/ps2link
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
