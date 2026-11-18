---
name: Twinsanity-Android
slug: twinsanity-android-windroid-emu
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
  repository: WINDROID-EMU/Twinsanity-Android
  repositoryId: '1438007273'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-31T06:08:23Z'
latestRelease:
  tag: null
  name: null
  publishedAt: null
  url: null
activity:
  lastSynchronized: '2026-11-18T04:23:49.210Z'
automation:
  sync: true
  github:
    repoEtag: W/"4e4e077aea871c43a14106c8beab4705ad83f5e83162850e0cf2a2d36f9b8042"
    releasesEtag: '"c3e8f26b776617a9ce91a8855c669f4e52a2d8010737f4308ca803aaa6579177"'
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
