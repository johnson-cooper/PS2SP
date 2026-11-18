---
name: ps2gdb
slug: ps2gdb-uyjulian
summary: >-
  Remote GDB debugging stub for PlayStation 2, enabling source-level debugging
  over serial or network connections.
categories:
  - development
tags:
  - gdb
  - debugging
  - fork
  - auto-discovered
features: []
authors: []
license: null
homepage: null
source:
  provider: github
  repository: uyjulian/ps2gdb
  repositoryId: '69762603'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2026-11-17T02:22:15Z'
latestRelease:
  tag: latest
  name: Latest development build
  publishedAt: '2026-11-17T02:22:17Z'
  url: 'https://github.com/uyjulian/ps2gdb/releases/tag/latest'
activity:
  lastSynchronized: '2026-11-18T04:23:17.730Z'
automation:
  sync: true
  github:
    repoEtag: W/"616eb3be64a5643835fe747d5de2320bd22a30ded59626ec2d7c5c8dd26ba7aa"
    releasesEtag: W/"3c3ec3d22d6adb4d54cc7f25c8be49cc4860826748919f8baf2b049c755f0689"
discovery:
  method: 'fork-network:ps2dev/ps2gdb'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2gdb'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2dev/ps2gdb
  source: ps2dev/ps2gdb
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
