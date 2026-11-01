---
name: ps2link
slug: ps2link-tatokis
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
  repository: tatokis/ps2link
  repositoryId: '233038278'
repository:
  archived: false
  defaultBranch: master
  stars: 0
  forks: 0
  lastCommit: '2018-11-24T14:11:46Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-01T23:37:53.217Z'
automation:
  sync: true
  github:
    repoEtag: W/"36779fce918eee7e16c37bc16c919b4df3880d95001153fab2a6d00ce0ab13ba"
    releasesEtag: '"47f1744e7295ced181535c901e04e3510025b9a0cf4a5e620620e00e8bc16c85"'
discovery:
  method: 'fork-network:ps2dev/ps2link'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2link'
  maturity: dormant-unreleased
verified: false
featured: false
relationships:
  forkOf: ps2dev/ps2link
  source: ps2dev/ps2link
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
