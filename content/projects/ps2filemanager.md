---
name: PS2FileManager
slug: ps2filemanager
summary: >-
  Gerenciador de arquivos para PlayStation 2 (Memory Card, HDD, SMB, USB) -
  PS2SDK
categories:
  - save-tools
  - networking
  - sdks
  - development
tags:
  - auto-discovered
features: []
authors: []
license: MIT
homepage: null
source:
  provider: github
  repository: VeroSilvaa/PS2FileManager
  repositoryId: '1426295917'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-21T23:40:31Z'
latestRelease:
  tag: v0.5.0
  name: 'v0.5.0 - Interface grafica, MP3, ELF'
  publishedAt: '2026-10-21T23:40:31Z'
  url: 'https://github.com/VeroSilvaa/PS2FileManager/releases/tag/v0.5.0'
activity:
  lastSynchronized: '2026-11-20T03:17:17.425Z'
automation:
  sync: true
  github:
    repoEtag: W/"9b94b57fe7bd45512fee45b153a666a0e635f4242c0765620232eb8ee35ba61e"
    releasesEtag: W/"5ca0d828c481ddfb0d87dd4f5c3f4aac8604d96a33629014b176c42219c39fe4"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
    - release contains a PS2-style ELF asset
  maturity: prerelease-only
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
