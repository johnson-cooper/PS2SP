---
name: ps2link
slug: ps2link-akuhak
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
  repository: AKuHAK/ps2link
  repositoryId: '382689496'
repository:
  archived: false
  defaultBranch: master
  stars: 1
  forks: 0
  lastCommit: '2024-09-03T22:13:46Z'
latestRelease:
  tag: latest
  name: Development build
  publishedAt: '2022-06-10T19:34:38Z'
  url: 'https://github.com/AKuHAK/ps2link/releases/tag/latest'
activity:
  lastSynchronized: '2026-10-16T12:26:22.734Z'
automation:
  sync: true
  github:
    repoEtag: W/"0e7429fd0e9ed6879902ca1b1fcc3cadba5310fdadd0449c981281e08fe5e3ec"
    releasesEtag: W/"ac002ef2323b65b01f2a0ca39639c087dc01f53edd8d9ebe8442b54761e35d63"
discovery:
  method: 'fork-network:ps2dev/ps2link'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ps2dev/ps2link'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: ps2dev/ps2link
  source: ps2dev/ps2link
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
