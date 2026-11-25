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
  repository: Lumi-Porting-Stuff/Crash-Twinsanity-Android
  repositoryId: '1437062127'
repository:
  archived: false
  defaultBranch: android
  stars: 1
  forks: 0
  lastCommit: '2026-11-24T13:45:14Z'
latestRelease:
  tag: v0.1.0
  name: Crash Twinsanity Android – test build (Mali)
  publishedAt: '2026-10-30T12:09:10Z'
  url: >-
    https://github.com/Lumi-Porting-Stuff/Crash-Twinsanity-Android/releases/tag/v0.1.0
activity:
  lastSynchronized: '2026-11-25T22:33:05.733Z'
automation:
  sync: true
  github:
    repoEtag: W/"c89fffd85fc036b220f78947c466c2bec5fc999d03fd8cc930a139e404f5d882"
    releasesEtag: W/"6149ceac21e454351669d27b43f190b9d5d116037714af4329de701997c1c5c9"
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
