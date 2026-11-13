---
name: Crash-Twinsanity-Windows
slug: crash-twinsanity-windows-josexd2
summary: >-
  Crash Twinsanity (PS2, PAL) running natively on Windows, played through to the
  credits: a Windows port of HAB3X's Mac port of Smartkin's C++ decompilation.
  No game data included: bring your own disc image.
categories:
  - preservation
  - development
  - ports
  - games
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: null
homepage: 'https://github.com/GioPixelGH/Crash-Twinsanity-Windows/releases/latest'
source:
  provider: github
  repository: JoseXD2/Crash-Twinsanity-Android
  repositoryId: '1437062127'
repository:
  archived: false
  defaultBranch: android
  stars: 0
  forks: 0
  lastCommit: '2026-10-30T14:08:34Z'
latestRelease:
  tag: v0.1.0
  name: Crash Twinsanity Android – test build (Mali)
  publishedAt: '2026-10-30T12:09:10Z'
  url: 'https://github.com/JoseXD2/Crash-Twinsanity-Android/releases/tag/v0.1.0'
activity:
  lastSynchronized: '2026-11-13T22:38:10.888Z'
automation:
  sync: true
  github:
    repoEtag: W/"6e9fa3b08f5773fbca3c8e47a829894730906b4685930b81fc89aab1ee3dceeb"
    releasesEtag: W/"7bc327c7b996a5fb98a2a9a23182ef61373f631dd5debd8898ace1c67fcf44d9"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - GitHub fork of another repository
    - >-
      fork lineage traces to indexed PS2 project:
      GioPixelGH/Crash-Twinsanity-Windows
  maturity: active-unreleased
verified: false
featured: false
hidden: false
relationships:
  forkOf: GioPixelGH/Crash-Twinsanity-Windows
  source: GioPixelGH/Crash-Twinsanity-Windows
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
