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
  forks: 2
  lastCommit: '2026-10-21T17:59:38Z'
latestRelease:
  tag: v1.0.12
  name: Crash Twinsanity for Windows 1.0.12
  publishedAt: '2026-10-21T17:59:38Z'
  url: 'https://github.com/GioPixelGH/Crash-Twinsanity-Windows/releases/tag/v1.0.12'
activity:
  lastSynchronized: '2026-10-22T10:11:33.408Z'
automation:
  sync: true
  github:
    repoEtag: W/"532dc83037e77fd5b7768fb089f3ceb0106eaeb6a8d630c9a5a861e4a46cb699"
    releasesEtag: W/"05e4bc892fe17fb5af4a95fff204729e58626dd94c27581e0cd32b32855e7340"
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
