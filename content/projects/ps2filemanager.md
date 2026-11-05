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
  lastSynchronized: '2026-11-05T03:31:29.953Z'
automation:
  sync: true
  github:
    repoEtag: W/"1197d37c667240195cc17de047d41f15eb40d16d3fcc11a8927eccb038b5919f"
    releasesEtag: W/"d47b7a0a001c925b06c32e5b5d24e9a19d437771d349ac41a7d1b13157a91503"
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
