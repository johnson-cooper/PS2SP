---
name: Crash-Twinsanity-Windows
slug: crash-twinsanity-windows
summary: >-
  Crash Twinsanity (PS2, PAL) running natively on Windows: a Windows port of
  HAB3X's Mac port of Smartkin's C++ decompilation. No game data included: bring
  your own disc image.
categories:
  - preservation
  - development
  - ports
  - games
tags:
  - auto-discovered
features: []
authors: []
license: null
homepage: 'https://github.com/GioPixelGH/Crash-Twinsanity-Windows/releases/latest'
source:
  provider: github
  repository: GioPixelGH/Crash-Twinsanity-Windows
  repositoryId: '1414438565'
repository:
  archived: false
  defaultBranch: main
  stars: 15
  forks: 3
  lastCommit: '2026-10-20T20:43:08Z'
latestRelease:
  tag: v1.0.11
  name: Crash Twinsanity for Windows 1.0.11
  publishedAt: '2026-10-20T20:43:08Z'
  url: 'https://github.com/GioPixelGH/Crash-Twinsanity-Windows/releases/tag/v1.0.11'
activity:
  lastSynchronized: '2026-10-21T10:09:04.157Z'
automation:
  sync: true
  github:
    repoEtag: W/"70e80df41ae83776d0ebd0386a3a4791276fa9277cbcc0de25d4bf17d226a215"
    releasesEtag: W/"b8dcc13d97ec35829dc3a0f55c2c08b449886547d8cace763a16c6e145cb1a95"
discovery:
  method: 'incremental:ps2 in:name,description'
  confidence: 100
  evidence:
    - PS2-specific topic
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - README contains PS2 development/toolchain evidence
    - published GitHub release present
  maturity: prerelease-only
verified: false
featured: false
hidden: false
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
