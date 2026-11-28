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
  stars: 146
  forks: 8
  lastCommit: '2026-11-25T10:35:21Z'
latestRelease:
  tag: v1.4.0
  name: Crash Twinsanity for Windows 1.4.0
  publishedAt: '2026-11-25T10:19:36Z'
  url: 'https://github.com/GioPixelGH/Crash-Twinsanity-Windows/releases/tag/v1.4.0'
activity:
  lastSynchronized: '2026-11-28T10:28:14.808Z'
automation:
  sync: true
  github:
    repoEtag: W/"40062bee5ead9b8537fcef83a34ebac61dbf875156d56747fb4b81a6c6d048ae"
    releasesEtag: W/"5e69c925a35bc683568da27b5ba8534be96e3abf9c1e887e51a808580d30d7a9"
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
