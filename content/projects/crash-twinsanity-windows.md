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
  stars: 110
  forks: 5
  lastCommit: '2026-11-01T22:51:07Z'
latestRelease:
  tag: v1.1.0
  name: Crash Twinsanity for Windows 1.1.0
  publishedAt: '2026-11-01T22:51:07Z'
  url: 'https://github.com/GioPixelGH/Crash-Twinsanity-Windows/releases/tag/v1.1.0'
activity:
  lastSynchronized: '2026-11-07T10:09:48.343Z'
automation:
  sync: true
  github:
    repoEtag: W/"cbe269b7179e2d38588d6eaea2835eadb580a92e037098b3d9953e0f61bc84af"
    releasesEtag: W/"e6b3eec72a63ed88e6d5bfbdcf5cbfe8a541f38f2374c0b177d93395b8a939b6"
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
