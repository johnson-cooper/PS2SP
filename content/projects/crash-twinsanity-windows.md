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
  stars: 133
  forks: 7
  lastCommit: '2026-11-09T18:59:13Z'
latestRelease:
  tag: v1.2.0
  name: Crash Twinsanity for Windows 1.2.0
  publishedAt: '2026-11-08T22:21:07Z'
  url: 'https://github.com/GioPixelGH/Crash-Twinsanity-Windows/releases/tag/v1.2.0'
activity:
  lastSynchronized: '2026-11-14T10:34:46.235Z'
automation:
  sync: true
  github:
    repoEtag: W/"344f67ef437c60f36a07adedc9d515312e1c038967aceb460e94eb5a365d7599"
    releasesEtag: W/"f46876e762a03c9d4621f23deb400c62367a0ed80ea76f7fcfea4e1b2d19ea48"
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
