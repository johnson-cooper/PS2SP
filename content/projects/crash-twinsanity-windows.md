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
  stars: 60
  forks: 2
  lastCommit: '2026-10-26T22:48:45Z'
latestRelease:
  tag: v1.0.19
  name: Crash Twinsanity for Windows 1.0.19
  publishedAt: '2026-10-26T22:48:46Z'
  url: 'https://github.com/GioPixelGH/Crash-Twinsanity-Windows/releases/tag/v1.0.19'
activity:
  lastSynchronized: '2026-10-27T10:34:55.192Z'
automation:
  sync: true
  github:
    repoEtag: W/"aa5112ce014153d6dd6b422442093122d7f7c448be137000f3ad357cbe326355"
    releasesEtag: W/"4a31acf56a05b6ae2a900bc6cb462474711ed4b007c4620d023e84687bb1b2be"
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
